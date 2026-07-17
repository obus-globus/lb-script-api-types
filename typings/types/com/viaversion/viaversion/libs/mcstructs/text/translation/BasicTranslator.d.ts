import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Translator } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/translation/Translator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BasicTranslator extends Object implements Translator {
    static GLOBAL: BasicTranslator;
    constructor()
    constructor(arg0: JavaMap<string, string>)
    readonly translations: JavaMap<string, string>;
    addTranslation(arg0: string, arg1: string): void;
    getTranslations(): JavaMap<string, string>;
    removeTranslation(arg0: string): void;
    translate(arg0: string): string;
    translateOrKey(arg0: string): string;
}