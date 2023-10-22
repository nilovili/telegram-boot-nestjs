// nlp.service.ts
import { Injectable } from '@nestjs/common';
import { Nlp } from '@nlpjs/nlp';

@Injectable()
export class NlpService {
  private nlp: any;

  constructor() {
    this.nlp = new Nlp({ languages: ['es'] });
    this.trainModel();
    this.nlp.settings.autoSave = false;
  }

  private async trainModel() {
    // Intención para obtener información personal
    this.nlp.addDocument('es', 'quiero saber sobre ti', 'getPersonalInfo');
    this.nlp.addDocument('es', 'cuéntame sobre ti', 'getPersonalInfo');
    this.nlp.addDocument('es', 'información personal', 'getPersonalInfo');

    // Intención para obtener experiencia laboral
    this.nlp.addDocument(
      'es',
      'cuéntame sobre tu experiencia',
      'getWorkExperience',
    );
    this.nlp.addDocument('es', 'tu experiencia laboral', 'getWorkExperience');
    this.nlp.addDocument('es', 'dónde has trabajado', 'getWorkExperience');

    // Intención para obtener habilidades
    this.nlp.addDocument('es', 'cuáles son tus habilidades', 'getSkills');
    this.nlp.addDocument('es', 'qué tecnologías conoces', 'getSkills');

    await this.nlp.train();
  }

  async processText(text: string) {
    return await this.nlp.process('es', text);
  }
}
