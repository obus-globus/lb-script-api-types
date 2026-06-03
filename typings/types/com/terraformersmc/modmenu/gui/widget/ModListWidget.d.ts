import type { ModsScreen } from '../../../../../com/terraformersmc/modmenu/gui/ModsScreen.d.ts'
import type { ModListEntry } from '../../../../../com/terraformersmc/modmenu/gui/widget/entries/ModListEntry.d.ts'
import type { Mod } from '../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { FabricIconHandler } from '../../../../../com/terraformersmc/modmenu/util/mod/fabric/FabricIconHandler.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ModListWidget extends ObjectSelectionList<ModListEntry> implements AutoCloseable {
    static DEBUG: boolean;
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ModListWidget, arg6: ModsScreen)
    // private addedMods: Mod[];
    // private iconHandler: FabricIconHandler;
    // private mods: Mod[];
    readonly parent: ModsScreen;
    // private restoreScrollY: number;
    // private selectedModId: string;
    addEntry(arg0: ModListEntry): number;
    addEntry(entry: ModListEntry, height: number): number;
    clearEntries(): void;
    close(): void;
    contentHeight(): number;
    drawSelectionHighlight(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    ensureVisible(arg0: ModListEntry): void;
    extractListItems(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    filter(arg0: string, arg1: boolean): void;
    filter(arg0: string, arg1: boolean, arg2: boolean): void;
    finalizeInit(): void;
    getDisplayedCountFor(arg0: string[]): number;
    getEntry(arg0: number): ModListEntry;
    getEntryAtPos(arg0: number, arg1: number): ModListEntry;
    getFabricIconHandler(): FabricIconHandler;
    getParent(): ModsScreen;
    getRowLeft(): number;
    getRowWidth(): number;
    // private hasVisibleChildMods(arg0: Mod): boolean;
    isFocused(): boolean;
    isSelectedEntry(arg0: number): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    reloadFilters(): void;
    remove(arg0: number): void;
    removeEntry(arg0: ModListEntry): void;
    scrollBarX(): number;
    select(arg0: ModListEntry): void;
    setScrollAmount(arg0: number): void;
    setSelected(arg0: ModListEntry): void;
}