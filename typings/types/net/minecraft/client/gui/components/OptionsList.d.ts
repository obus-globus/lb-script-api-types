import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { OptionsList$AbstractEntry } from '../../../../../net/minecraft/client/gui/components/OptionsList$AbstractEntry.d.ts'
import type { OptionsSubScreen } from '../../../../../net/minecraft/client/gui/screens/options/OptionsSubScreen.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class OptionsList extends ContainerObjectSelectionList<OptionsList$AbstractEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(minecraft: Minecraft, width: number, screen: OptionsSubScreen)
    // private screen: OptionsSubScreen;
    addBig(option: OptionInstance<Object>): void;
    addBig(widget: AbstractWidget): void;
    addHeader(text: Component): void;
    addSmall(...options: OptionInstance<Object>[]): void;
    addSmall(widgets: AbstractWidget[]): void;
    addSmall(firstOption: AbstractWidget, firstOptionInstance: OptionInstance<Object>, secondOption: AbstractWidget): void;
    addSmall(firstOption: AbstractWidget, secondOption: AbstractWidget): void;
    applyUnsavedChanges(): void;
    findOption(option: OptionInstance<Object>): AbstractWidget;
    getRowWidth(): number;
    resetOption(option: OptionInstance<Object>): void;
}