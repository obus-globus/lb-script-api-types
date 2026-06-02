import type { Object } from '../../../../java/lang/Object.d.ts'
export class LanguageMap extends Object {
    constructor(arg0: Path[])
    // private translationMaps: { [key: string]: { [key: string]: string } };
    getLanguages(): string[];
    getTranslations(arg0: string): { [key: string]: string };
}