import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractButton } from '../../../../../../net/minecraft/client/gui/components/AbstractButton.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { BeaconScreen$BeaconButton } from '../../../../../../net/minecraft/client/gui/screens/inventory/BeaconScreen$BeaconButton.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class BeaconScreen$BeaconScreenButton extends AbstractButton implements BeaconScreen$BeaconButton {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number)
    constructor(x: number, y: number, component: Component)
    readonly selected: boolean;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractIcon(graphics: GuiGraphicsExtractor): void;
    isSelected(): boolean;
    setSelected(selected: boolean): void;
    updateStatus(levels: number): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}