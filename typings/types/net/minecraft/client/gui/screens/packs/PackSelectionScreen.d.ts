import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { PackSelectionModel } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel.d.ts'
import type { PackSelectionModel$Entry } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$Entry.d.ts'
import type { PackSelectionModel$EntryBase } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$EntryBase.d.ts'
import type { PackSelectionScreen$Watcher } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionScreen$Watcher.d.ts'
import type { TransferableSelectionList } from '../../../../../../net/minecraft/client/gui/screens/packs/TransferableSelectionList.d.ts'
import type { TextureManager } from '../../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Pack } from '../../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { PackRepository } from '../../../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PackSelectionScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(repository: PackRepository, output: (param0: PackRepository) => void, packDir: Path, title: Component)
    // private availablePackList: TransferableSelectionList;
    // private doneButton: Button;
    // private layout: HeaderAndFooterLayout;
    // private model: PackSelectionModel;
    // private packDir: Path;
    // private packIcons: JavaMap<string, Identifier>;
    // private search: EditBox;
    // private selectedPackList: TransferableSelectionList;
    // private ticksToReload: number;
    // private watcher: PackSelectionScreen$Watcher;
    // private closeWatcher(): void;
    // private filterEntries(value: string, oldEntries: Stream<PackSelectionModel$Entry>, listToUpdate: TransferableSelectionList, transferredEntry: PackSelectionModel$EntryBase): void;
    // private getPackIcon(pack: Pack): Identifier;
    init(): void;
    init(width: number, height: number): void;
    // private loadPackIcon(textureManager: TextureManager, pack: Pack): Identifier;
    onClose(): void;
    onFilesDrop(files: Path[]): void;
    // private populateLists(transferredEntry: PackSelectionModel$EntryBase): void;
    // private reload(): void;
    repositionElements(): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
    tick(): void;
    // private updateFilteredEntries(value: string): void;
    // private updateFilteredEntries(value: string, transferredEntry: PackSelectionModel$EntryBase): void;
}