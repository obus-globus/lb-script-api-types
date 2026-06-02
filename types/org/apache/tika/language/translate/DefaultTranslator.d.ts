import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServiceLoader } from '../../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { Translator } from '../../../../../org/apache/tika/language/translate/Translator.d.ts'
export class DefaultTranslator extends Object implements Translator {
    constructor()
    constructor(arg0: ServiceLoader)
    // private loader: ServiceLoader;
    getTranslator(): Translator;
    getTranslators(): Translator[];
    isAvailable(): boolean;
    translate(arg0: string, arg1: string): string;
    translate(arg0: string, arg1: string, arg2: string): string;
}