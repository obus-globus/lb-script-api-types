import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { CreateFlatWorldScreen$DetailsList$Entry } from '../../../../../net/minecraft/client/gui/screens/CreateFlatWorldScreen$DetailsList$Entry.d.ts'
import type { CreateFlatWorldScreen$DetailsList$LayerEntry } from '../../../../../net/minecraft/client/gui/screens/CreateFlatWorldScreen$DetailsList$LayerEntry.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class CreateFlatWorldScreen$DetailsList extends ObjectSelectionList<CreateFlatWorldScreen$DetailsList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: CreateFlatWorldScreen$DetailsList)
    // private deleteLayer(selectedLayerEntry: CreateFlatWorldScreen$DetailsList$LayerEntry): void;
    // private populateList(): void;
    resetRows(): void;
    setSelected(selected: CreateFlatWorldScreen$DetailsList$Entry): void;
}