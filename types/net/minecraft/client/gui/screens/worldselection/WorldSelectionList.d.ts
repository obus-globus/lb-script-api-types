import type { DateTimeFormatter } from '../../../../../../java/time/format/DateTimeFormatter.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { WorldSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$Entry.d.ts'
import type { WorldSelectionList$EntryType } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$EntryType.d.ts'
import type { WorldSelectionList$LoadingHeader } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$LoadingHeader.d.ts'
import type { WorldSelectionList$WorldListEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$WorldListEntry.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { LevelSummary } from '../../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
export class WorldSelectionList extends ObjectSelectionList<WorldSelectionList$Entry> {
    static DATE_FORMAT: DateTimeFormatter;
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(screen: Screen, minecraft: Minecraft, width: number, height: number, filter: string, oldList: WorldSelectionList, onEntrySelect: (param0: LevelSummary) => void, onEntryInteract: (param0: WorldSelectionList$WorldListEntry) => void, entryType: WorldSelectionList$EntryType)
    // private currentlyDisplayedLevels: LevelSummary[];
    // private entryType: WorldSelectionList$EntryType;
    // private filter: string;
    // private hasPolled: boolean;
    // private loadingHeader: WorldSelectionList$LoadingHeader;
    // private onEntryInteract: (param0: WorldSelectionList$WorldListEntry) => void;
    // private onEntrySelect: (param0: LevelSummary) => void;
    // private pendingLevels: CompletableFuture<LevelSummary[]>;
    readonly screen: Screen;
    clearEntries(): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private fillLevels(filter: string, levels: LevelSummary[]): void;
    // private filterAccepts(filter: string, level: LevelSummary): boolean;
    getRowWidth(): number;
    getScreen(): Screen;
    getSelectedOpt(): Optional<WorldSelectionList$WorldListEntry>;
    // private handleLevelLoadFailure(message: Component): void;
    // private handleNewLevels(levels: LevelSummary[]): void;
    // private loadLevels(): CompletableFuture<LevelSummary[]>;
    // private notifyListUpdated(): void;
    // private pollLevelsIgnoreErrors(): LevelSummary[];
    reloadWorldList(): void;
    returnToScreen(): void;
    setSelected(selected: WorldSelectionList$Entry): void;
    updateFilter(newFilter: string): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}