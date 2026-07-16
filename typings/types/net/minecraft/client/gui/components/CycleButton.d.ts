import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractButton } from '../../../../../net/minecraft/client/gui/components/AbstractButton.d.ts'
import type { CycleButton$Builder } from '../../../../../net/minecraft/client/gui/components/CycleButton$Builder.d.ts'
import type { CycleButton$DisplayState } from '../../../../../net/minecraft/client/gui/components/CycleButton$DisplayState.d.ts'
import type { CycleButton$OnValueChange } from '../../../../../net/minecraft/client/gui/components/CycleButton$OnValueChange.d.ts'
import type { CycleButton$SpriteSupplier } from '../../../../../net/minecraft/client/gui/components/CycleButton$SpriteSupplier.d.ts'
import type { CycleButton$ValueListSupplier } from '../../../../../net/minecraft/client/gui/components/CycleButton$ValueListSupplier.d.ts'
import type { ResettableOptionWidget } from '../../../../../net/minecraft/client/gui/components/ResettableOptionWidget.d.ts'
import type { Tooltip } from '../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { InputWithModifiers } from '../../../../../net/minecraft/client/input/InputWithModifiers.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class CycleButton<T extends unknown> extends AbstractButton implements ResettableOptionWidget {
    static DEFAULT_ALT_LIST_SELECTOR: () => boolean;
    static booleanBuilder(paramtrueText: Component, paramfalseText: Component, paramdefaultValue: boolean): CycleButton$Builder<boolean>;
    static builder<T extends unknown>(paramvalueStringifier: (param0: T) => Component, paramdefaultValue: T): CycleButton$Builder<T>;
    static builder<T extends unknown>(paramvalueStringifier: (param0: T) => Component, paramdefaultValueSupplier: () => T): CycleButton$Builder<T>;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static onOffBuilder(paraminitialValue: boolean): CycleButton$Builder<boolean>;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(x: number, y: number, width: number, height: number, message: Component, name: Component, index: number, value: T, defaultValueSupplier: () => T, values: CycleButton$ValueListSupplier<T>, valueStringifier: (param0: T) => Component, narrationProvider: (param0: CycleButton<T>) => MutableComponent, onValueChange: (param0: CycleButton<T>, param1: T) => void, tooltipSupplier: (param0: T) => Tooltip, displayState: CycleButton$DisplayState, spriteSupplier: (param0: CycleButton<T>, param1: T) => Identifier)
    // private defaultValueSupplier: () => T;
    // private displayState: CycleButton$DisplayState;
    // private index: number;
    // private name: Component;
    // private narrationProvider: (param0: CycleButton<T>) => MutableComponent;
    // private onValueChange: (param0: CycleButton<T>, param1: T) => void;
    // private spriteSupplier: (param0: CycleButton<T>, param1: T) => Identifier;
    // private tooltipSupplier: (param0: T) => Tooltip;
    readonly value: T;
    // private valueStringifier: (param0: T) => Component;
    // private values: CycleButton$ValueListSupplier<T>;
    createDefaultNarrationMessage(): MutableComponent;
    // private createFullName(newValue: T): MutableComponent;
    // private createLabelForValue(newValue: T): Component;
    createNarrationMessage(): MutableComponent;
    // private cycleValue(delta: number): void;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private getCycledValue(delta: number): T;
    getValue(): T;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    onPress(input: InputWithModifiers): void;
    resetValue(): void;
    setValue(newValue: T): void;
    // private updateTooltip(): void;
    // private updateValue(newValue: T): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}