import type { DescriptionListWidget } from '../../../../com/terraformersmc/modmenu/gui/widget/DescriptionListWidget.d.ts'
import type { ModListWidget } from '../../../../com/terraformersmc/modmenu/gui/widget/ModListWidget.d.ts'
import type { ModListEntry } from '../../../../com/terraformersmc/modmenu/gui/widget/entries/ModListEntry.d.ts'
import type { ModBadgeRenderer } from '../../../../com/terraformersmc/modmenu/util/mod/ModBadgeRenderer.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { EditBox } from '../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { NarratableEntry } from '../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { CharacterEvent } from '../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModsScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(arg0: Screen)
    // private configureButton: AbstractWidget;
    // private descriptionListWidget: DescriptionListWidget;
    // private filterOptionsShown: boolean;
    // private filtersButton: AbstractWidget;
    // private filtersWidth: number;
    // private filtersX: number;
    // private init: boolean;
    // private issuesButton: AbstractWidget;
    // private keepFilterOptionsShown: boolean;
    // private librariesButton: AbstractWidget;
    // private modBadgeRenderer: ModBadgeRenderer;
    modHasConfigScreen: { [key: string]: boolean };
    // private modList: ModListWidget;
    modScreenErrors: { [key: string]: Throwable };
    // private paneWidth: number;
    // private previousScreen: Screen;
    // private rightPaneX: number;
    // private scrollPercent: number;
    // private searchBox: EditBox;
    // private searchBoxX: number;
    // private searchRowWidth: number;
    // private selected: ModListEntry;
    showModChildren: string[];
    // private sortingButton: AbstractWidget;
    // private websiteButton: AbstractWidget;
    charTyped(arg0: CharacterEvent): boolean;
    // private computeLibraryCountText(arg0: boolean): Component;
    // private computeModCountText(arg0: boolean, arg1: boolean): Component;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    // private formatModCount(arg0: string[], arg1: boolean): number[];
    getModHasConfigScreen(arg0: string): boolean;
    getSearchInput(): string;
    getSelectedEntry(): ModListEntry;
    init(): void;
    init(width: number, height: number): void;
    keyPressed(arg0: KeyEvent): boolean;
    onClose(): void;
    onFilesDrop(arg0: Path[][]): void;
    safelyOpenConfigScreen(arg0: string): void;
    // private setFilterOptionsShown(arg0: boolean): void;
    // private updateFiltersX(arg0: boolean): boolean;
    updateScrollPercent(arg0: number): void;
    updateSelectedEntry(arg0: ModListEntry): void;
}