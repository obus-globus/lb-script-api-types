import type { AbstractWidget$WithInactiveMessage } from '../../../../../net/minecraft/client/gui/components/AbstractWidget$WithInactiveMessage.d.ts'
import type { Tab } from '../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class TabButton extends AbstractWidget$WithInactiveMessage {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(tabManager: TabManager, tab: Tab, width: number, height: number)
    // private tab: Tab;
    // private tabManager: TabManager;
    isSelected(): boolean;
    playDownSound(soundManager: SoundManager): void;
    tab(): Tab;
    updateWidgetNarration(output: NarrationElementOutput): void;
}