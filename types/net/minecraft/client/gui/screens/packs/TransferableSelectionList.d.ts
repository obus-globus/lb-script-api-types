import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { PackSelectionModel$Entry } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$Entry.d.ts'
import type { PackSelectionModel$EntryBase } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$EntryBase.d.ts'
import type { PackSelectionScreen } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionScreen.d.ts'
import type { TransferableSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/packs/TransferableSelectionList$Entry.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class TransferableSelectionList extends ObjectSelectionList<TransferableSelectionList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(minecraft: Minecraft, screen: PackSelectionScreen, width: number, height: number, title: Component)
    // private screen: PackSelectionScreen;
    // private title: Component;
    getRowWidth(): number;
    keyPressed(event: KeyEvent): boolean;
    scrollBarX(): number;
    updateList(entries: Stream<PackSelectionModel$Entry>, transferredEntry: PackSelectionModel$EntryBase): void;
}