import type { Mod } from '../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class DrawingUtil extends Object {
    static drawBadge(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static drawRandomVersionBackground(paramarg0: Mod, paramarg1: GuiGraphicsExtractor, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static drawWrappedString(paramarg0: GuiGraphicsExtractor, paramarg1: string, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}