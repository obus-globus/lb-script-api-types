import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { CycleButton } from '../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { CycleButton$DisplayState } from '../../../../../net/minecraft/client/gui/components/CycleButton$DisplayState.d.ts'
import type { CycleButton$OnValueChange } from '../../../../../net/minecraft/client/gui/components/CycleButton$OnValueChange.d.ts'
import type { CycleButton$SpriteSupplier } from '../../../../../net/minecraft/client/gui/components/CycleButton$SpriteSupplier.d.ts'
import type { CycleButton$ValueListSupplier } from '../../../../../net/minecraft/client/gui/components/CycleButton$ValueListSupplier.d.ts'
import type { Tooltip } from '../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class CycleButton$Builder<T extends Object | number | string | boolean> extends Object {
    constructor(valueStringifier: (param0: T) => Component, defaultValueSupplier: () => T)
    // private defaultValueSupplier: () => T;
    // private displayState: CycleButton$DisplayState;
    // private narrationProvider: (param0: CycleButton<T>) => MutableComponent;
    // private spriteSupplier: (param0: CycleButton<T>, param1: T) => Identifier;
    // private tooltipSupplier: (param0: T) => Tooltip;
    // private valueStringifier: (param0: T) => Component;
    // private values: CycleButton$ValueListSupplier<T>;
    create(x: number, y: number, width: number, height: number, name: Component): CycleButton<T>;
    create(x: number, y: number, width: number, height: number, name: Component, valueChangeListener: (param0: CycleButton<T>, param1: T) => void): CycleButton<T>;
    create(name: Component, valueChangeListener: (param0: CycleButton<T>, param1: T) => void): CycleButton<T>;
    displayOnlyValue(): CycleButton$Builder<T>;
    displayState(state: CycleButton$DisplayState): CycleButton$Builder<T>;
    withCustomNarration(narrationProvider: (param0: CycleButton<T>) => MutableComponent): CycleButton$Builder<T>;
    withSprite(spriteSupplier: (param0: CycleButton<T>, param1: T) => Identifier): CycleButton$Builder<T>;
    withTooltip(tooltipSupplier: (param0: T) => Tooltip): CycleButton$Builder<T>;
    withValues(altCondition: () => boolean, values: T[], altValues: T[]): CycleButton$Builder<T>;
    withValues(values: T[]): CycleButton$Builder<T>;
    withValues(values: T[], altValues: T[]): CycleButton$Builder<T>;
    withValues(valueListSupplier: CycleButton$ValueListSupplier<T>): CycleButton$Builder<T>;
}