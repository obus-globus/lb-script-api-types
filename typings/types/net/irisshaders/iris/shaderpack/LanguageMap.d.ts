import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LanguageMap extends Object {
    constructor(arg0: Path[])
    // private translationMaps: { [key: string]: { [key: string]: string } };
    getLanguages(): string[];
    getTranslations(arg0: string): { [key: string]: string };
}