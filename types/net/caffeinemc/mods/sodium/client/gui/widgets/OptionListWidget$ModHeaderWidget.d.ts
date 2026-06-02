import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { OptionListWidget$HeaderWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/OptionListWidget$HeaderWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class OptionListWidget$ModHeaderWidget extends OptionListWidget$HeaderWidget {
    constructor(arg0: AbstractOptionList, arg1: Dim2i, arg2: ModOptions, arg3: ColorTheme)
    // private icon: Identifier;
    // private iconMonochrome: boolean;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
}