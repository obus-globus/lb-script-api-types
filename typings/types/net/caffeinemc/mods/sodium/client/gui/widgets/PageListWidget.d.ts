import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Page } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { VideoSettingsScreen } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/VideoSettingsScreen.d.ts'
import type { AbstractScrollable } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractScrollable.d.ts'
import type { PageListWidget$EntryWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget$EntryWidget.d.ts'
import type { PageListWidget$PageEntryWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget$PageEntryWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class PageListWidget extends AbstractScrollable {
    static renderBackgroundGradient(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor(arg0: Dim2i, arg1: VideoSettingsScreen)
    // private pageToWidget: JavaMap<Page, PageListWidget$PageEntryWidget<any>>;
    // private parent: VideoSettingsScreen;
    // private selected: PageListWidget$EntryWidget;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    // private rebuild(): void;
    switchSelected(arg0: Page): void;
    // private switchSelectedWidget(arg0: PageListWidget$EntryWidget): void;
}