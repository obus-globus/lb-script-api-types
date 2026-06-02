import type { Style } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { TextFormatting } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LegacyStringDeserializer extends Object {
    static parse(paramarg0: string, paramarg1: boolean): TextComponent;
    static parse(paramarg0: string, paramarg1: string, paramarg2: boolean): TextComponent;
    static parse(paramarg0: string, paramarg1: string, paramarg2: (param0: string) => TextFormatting): TextComponent;
    static parse(paramarg0: string, paramarg1: string, paramarg2: () => Style, paramarg3: (param0: string) => TextFormatting): TextComponent;
    constructor()
}