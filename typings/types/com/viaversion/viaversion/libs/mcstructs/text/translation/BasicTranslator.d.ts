import type { Translator } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/translation/Translator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BasicTranslator extends Object implements Translator {
    static GLOBAL: BasicTranslator;
    constructor()
    constructor(arg0: { [key: string]: string })
    readonly translations: { [key: string]: string };
    addTranslation(arg0: string, arg1: string): void;
    getTranslations(): { [key: string]: string };
    removeTranslation(arg0: string): void;
    translate(arg0: string): string;
    translateOrKey(arg0: string): string;
}