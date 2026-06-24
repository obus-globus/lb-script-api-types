import type { ExternalPage } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ExternalPage.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { PageListWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget.d.ts'
import type { PageListWidget$PageEntryWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget$PageEntryWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
export class PageListWidget$ExternalPageEntryWidget extends PageListWidget$PageEntryWidget<ExternalPage> {
    constructor(null_: PageListWidget, arg1: Dim2i, arg2: ExternalPage, arg3: ColorTheme, arg4: number)
    onAction(): void;
}