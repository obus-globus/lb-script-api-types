import type { ExternalPage } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ExternalPage.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { OptionListWidget$PageHeaderWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/OptionListWidget$PageHeaderWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class OptionListWidget$ExternalPageWidget extends OptionListWidget$PageHeaderWidget {
    constructor(arg0: Screen, arg1: AbstractOptionList, arg2: Dim2i, arg3: ExternalPage, arg4: ColorTheme)
    // private page: ExternalPage;
    // private screen: Screen;
    // private theme: ColorTheme;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
}