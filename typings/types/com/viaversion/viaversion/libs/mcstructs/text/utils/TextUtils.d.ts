import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Translator } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/translation/Translator.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TextUtils extends Object {
    static iterateAll(paramarg0: TextComponent, paramarg1: (param0: TextComponent) => void): void;
    static join(paramarg0: TextComponent, paramarg1: (Object | null)[]): TextComponent;
    static makeURLsClickable(paramarg0: TextComponent): TextComponent;
    static makeURLsClickable(paramarg0: TextComponent, paramarg1: boolean): TextComponent;
    static replace(paramarg0: TextComponent, paramarg1: string, paramarg2: (param0: TextComponent) => TextComponent): TextComponent;
    static replace(paramarg0: TextComponent, paramarg1: (param0: TextComponent) => TextComponent): TextComponent;
    static replaceRGBColors(paramarg0: TextComponent): TextComponent;
    static setTranslator(paramarg0: TextComponent, paramarg1: (param0: string) => string): void;
    static setTranslator(paramarg0: TextComponent, paramarg1: (param0: string) => string, paramarg2: (param0: string) => string): void;
    static split(paramarg0: TextComponent, paramarg1: string, paramarg2: boolean): (Object | null)[];
    constructor()
}