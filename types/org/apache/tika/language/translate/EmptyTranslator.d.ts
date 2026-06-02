import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Translator } from '../../../../../org/apache/tika/language/translate/Translator.d.ts'
export class EmptyTranslator extends Object implements Translator {
    constructor()
    isAvailable(): boolean;
    translate(arg0: string, arg1: string): string;
    translate(arg0: string, arg1: string, arg2: string): string;
}