import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Option$OptionNameSource } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option$OptionNameSource.d.ts'
import type { Page } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { AbstractOptionList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { OptionListWidget$SectionInfo } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/OptionListWidget$SectionInfo.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class OptionListWidget extends AbstractOptionList {
    constructor(arg0: Screen, arg1: Dim2i, arg2: (param0: Page) => void)
    // private entryHeight: number;
    readonly filteredOptions: Option$OptionNameSource[];
    // private ignoreNextScrollUpdate: boolean;
    // private lastFocusedSection: OptionListWidget$SectionInfo;
    // private onPageFocused: (param0: Page) => void;
    // private pageToSectionInfo: JavaMap<Page, OptionListWidget$SectionInfo>;
    clearFilter(): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    jumpToPage(arg0: Page): void;
    rebuild(arg0: Screen): void;
    // private renderAllPages(arg0: Screen, arg1: number, arg2: number, arg3: number): number;
    // private renderFilteredOptions(arg0: Screen, arg1: number, arg2: number, arg3: number): number;
    setFilteredOptions(arg0: Option$OptionNameSource[]): void;
    // private updateSectionFocus(arg0: number): void;
}