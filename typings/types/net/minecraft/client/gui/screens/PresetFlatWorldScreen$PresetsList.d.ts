import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { PresetFlatWorldScreen } from '../../../../../net/minecraft/client/gui/screens/PresetFlatWorldScreen.d.ts'
import type { PresetFlatWorldScreen$PresetsList$Entry } from '../../../../../net/minecraft/client/gui/screens/PresetFlatWorldScreen$PresetsList$Entry.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class PresetFlatWorldScreen$PresetsList extends ObjectSelectionList<PresetFlatWorldScreen$PresetsList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: PresetFlatWorldScreen, access: RegistryAccess, enabledFeatures: FeatureFlagSet)
    keyPressed(event: KeyEvent): boolean;
    setSelected(selected: PresetFlatWorldScreen$PresetsList$Entry): void;
}