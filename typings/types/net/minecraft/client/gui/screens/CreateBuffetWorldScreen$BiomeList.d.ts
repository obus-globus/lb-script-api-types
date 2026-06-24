import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { CreateBuffetWorldScreen } from '../../../../../net/minecraft/client/gui/screens/CreateBuffetWorldScreen.d.ts'
import type { CreateBuffetWorldScreen$BiomeList$Entry } from '../../../../../net/minecraft/client/gui/screens/CreateBuffetWorldScreen$BiomeList$Entry.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class CreateBuffetWorldScreen$BiomeList extends ObjectSelectionList<CreateBuffetWorldScreen$BiomeList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(null_: CreateBuffetWorldScreen)
    // private filterEntries(filter: string): void;
    setSelected(selected: CreateBuffetWorldScreen$BiomeList$Entry): void;
}