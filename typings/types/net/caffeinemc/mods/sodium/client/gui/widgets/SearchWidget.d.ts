import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { SearchQuerySession } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchQuerySession.d.ts'
import type { Option$OptionNameSource } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option$OptionNameSource.d.ts'
import type { AbstractParentWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractParentWidget.d.ts'
import type { FlatButtonWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/FlatButtonWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { EditBox } from '../../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { GuiEventListener } from '../../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { CharacterEvent } from '../../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
export class SearchWidget extends AbstractParentWidget {
    constructor(arg0: (param0: Option$OptionNameSource[]) => void, arg1: Dim2i)
    // private clearButton: FlatButtonWidget;
    // private lastRebuildWidth: number;
    // private onSearchResults: (param0: Option$OptionNameSource[]) => void;
    // private query: string;
    // private searchBox: EditBox;
    // private searchQuerySession: SearchQuerySession;
    charTyped(arg0: CharacterEvent): boolean;
    // private clearSearch(): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    // private getGroupScore(arg0: Option$OptionNameSource, arg1: Option$OptionNameSource): number;
    // private improveGrouping(arg0: Option$OptionNameSource[]): void;
    isSearching(): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    // private rebuildForWidth(arg0: number): void;
    // private search(): void;
    setFocused(arg0: boolean): void;
    setFocused(arg0: GuiEventListener): void;
    // private triggerSearch(arg0: string): void;
    // private updateClearButtonVisibility(): void;
    updateWidgetWidth(arg0: number): void;
}