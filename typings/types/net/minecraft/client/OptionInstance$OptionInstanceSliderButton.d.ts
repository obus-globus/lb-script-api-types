import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$SliderableValueSet } from '../../../net/minecraft/client/OptionInstance$SliderableValueSet.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractOptionSliderButton } from '../../../net/minecraft/client/gui/components/AbstractOptionSliderButton.d.ts'
import type { ResettableOptionWidget } from '../../../net/minecraft/client/gui/components/ResettableOptionWidget.d.ts'
import type { KeyEvent } from '../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { SoundManager } from '../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class OptionInstance$OptionInstanceSliderButton<N extends Object | number | string | boolean> extends AbstractOptionSliderButton implements ResettableOptionWidget {
    static DEFAULT_HEIGHT: number;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(options: Options, x: number, y: number, width: number, height: number, instance: OptionInstance<N>, values: OptionInstance$SliderableValueSet<N>, tooltipSupplier: (param0: N) => net.minecraft.client.gui.components.Tooltip, onValueChanged: (param0: N) => void, applyValueImmediately: boolean)
    // private applyValueImmediately: boolean;
    // private delayedApplyAt: number;
    // private instance: OptionInstance<N>;
    // private onValueChanged: (param0: N) => void;
    // private tooltipSupplier: (param0: N) => net.minecraft.client.gui.components.Tooltip;
    // private values: OptionInstance$SliderableValueSet<N>;
    applyUnsavedValue(): void;
    applyValue(): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    keyPressed(event: KeyEvent): boolean;
    onRelease(event: MouseButtonEvent): void;
    resetValue(): void;
    updateMessage(): void;
}