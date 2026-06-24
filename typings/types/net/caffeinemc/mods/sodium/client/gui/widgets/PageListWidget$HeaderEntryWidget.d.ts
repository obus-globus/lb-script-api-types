import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { PageListWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget.d.ts'
import type { PageListWidget$ClickableEntryWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget$ClickableEntryWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class PageListWidget$HeaderEntryWidget extends PageListWidget$ClickableEntryWidget {
    constructor(null_: PageListWidget, arg1: Dim2i, arg2: ModOptions, arg3: ColorTheme)
    // private icon: Identifier;
    // private iconMonochrome: boolean;
    // private modOptions: ModOptions;
    onAction(): void;
    renderIcon(arg0: GuiGraphicsExtractor, arg1: number): number;
}