import { Injectable } from '@nestjs/common';
import { DataService } from 'src/modules/data/services/data.service';
import { NlpService } from 'src/modules/nlp/services/nlp.service';
import { Telegraf } from 'telegraf';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramService {
  private bot: Telegraf;

  constructor(
    private readonly dataService: DataService,
    private readonly nlpService: NlpService, // Inyecta el servicio de NLP aquí
    private configService: ConfigService,
  ) {
    this.bot = new Telegraf(
      this.configService.get<string>('TELEGRAM_BOT_TOKEN'),
    );
    this.initializeBot();
  }

  private async initializeBot() {
    this.bot.start((ctx) =>
      ctx.reply('¡Hola! Soy el bot CV de Nilo. ¿En qué puedo ayudarte?'),
    );

    this.bot.on('text', async (ctx) => {
      const result = await this.nlpService.processText(ctx.message.text);
      switch (result.intent) {
        case 'getPersonalInfo':
          // Llama a la función que envía la información personal
          const personalInfo = this.dataService.getPersonalInfo();
          ctx.reply(`
            Nombre: ${personalInfo.name}
            Ubicación: ${personalInfo.location}
            Teléfono: ${personalInfo.phone}
            Email: ${personalInfo.email}
            LinkedIn: ${personalInfo.linkedin}
            GitHub: ${personalInfo.github}
          `);
          break;

        case 'getWorkExperience':
          // Llama a la función que envía la experiencia laboral
          const workExperience = this.dataService.getWorkExperience();
          let response = 'Experiencia laboral:\n\n';
          workExperience.forEach((job) => {
            response += `
              Compañía: ${job.company}
              Posición: ${job.position}
              Fecha: ${job.date}
              Descripción: ${job.description.join(', ')}
              Tecnologías: ${job.techStack.join(', ')}
              ---------------
            `;
          });
          ctx.reply(response);
          break;

        case 'getSkills':
          // Llama a la función que envía las habilidades
          const skills = this.dataService.getSkills();
          ctx.reply(`
            Lenguajes de Programación: ${skills.programmingLanguages.join(', ')}
            Frameworks: ${skills.frameworks.join(', ')}
            Bases de Datos: ${skills.databases.join(', ')}
            Herramientas: ${skills.tools.join(', ')}
            Metodologías: ${skills.methodologies.join(', ')}
            Idiomas: ${skills.languages
              .map((lang) => `${lang.language} (${lang.level})`)
              .join(', ')}
          `);
          break;

        default:
          ctx.reply(
            'Lo siento, no entendí eso. ¿Puedes reformularlo o usar uno de los comandos?',
          );
      }
    });

    this.bot.launch();
  }
}
