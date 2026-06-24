import type { RealmsPreferredRegionSelectionScreen } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsPreferredRegionSelectionScreen.d.ts'
import type { RealmsPreferredRegionSelectionScreen$RegionSelectionList$Entry } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsPreferredRegionSelectionScreen$RegionSelectionList$Entry.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsPreferredRegionSelectionScreen$RegionSelectionList extends ObjectSelectionList<RealmsPreferredRegionSelectionScreen$RegionSelectionList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(null_: RealmsPreferredRegionSelectionScreen)
    setSelected(selected: RealmsPreferredRegionSelectionScreen$RegionSelectionList$Entry): void;
}