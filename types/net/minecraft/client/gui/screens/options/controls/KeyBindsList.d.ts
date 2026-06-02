import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { KeyBindsList$Entry } from '../../../../../../../net/minecraft/client/gui/screens/options/controls/KeyBindsList$Entry.d.ts'
import type { KeyBindsScreen } from '../../../../../../../net/minecraft/client/gui/screens/options/controls/KeyBindsScreen.d.ts'
import type { SoundManager } from '../../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class KeyBindsList extends ContainerObjectSelectionList<KeyBindsList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(keyBindsScreen: KeyBindsScreen, minecraft: Minecraft)
    // private keyBindsScreen: KeyBindsScreen;
    // private maxNameWidth: number;
    getRowWidth(): number;
    refreshEntries(): void;
    resetMappingAndUpdateButtons(): void;
}