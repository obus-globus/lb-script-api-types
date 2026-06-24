import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { IntSupplier } from '../../../java/util/function/IntSupplier.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$IntRangeBase } from '../../../net/minecraft/client/OptionInstance$IntRangeBase.d.ts'
import type { OptionInstance$SliderableOrCyclableValueSet } from '../../../net/minecraft/client/OptionInstance$SliderableOrCyclableValueSet.d.ts'
import type { OptionInstance$SliderableValueSet } from '../../../net/minecraft/client/OptionInstance$SliderableValueSet.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { OptionInstance$ValueUpdateListener } from '../../../net/minecraft/client/OptionInstance$ValueUpdateListener.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { CycleButton$ValueListSupplier } from '../../../net/minecraft/client/gui/components/CycleButton$ValueListSupplier.d.ts'
import type { Tooltip } from '../../../net/minecraft/client/gui/components/Tooltip.d.ts'
export class OptionInstance$ClampingLazyMaxIntRange extends Record implements OptionInstance$IntRangeBase, OptionInstance$SliderableOrCyclableValueSet<number> {
    constructor(minInclusive: number, maxSupplier: () => number, encodableMaxInclusive: number)
    // private encodableMaxInclusive: number;
    // private maxSupplier: () => number;
    // private minInclusive: number;
    codec(): Codec<number>;
    createButton(tooltip: (param0: number) => Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: number) => void): (param0: OptionInstance<number>) => AbstractWidget;
    createCycleButton(): boolean;
    encodableMaxInclusive(): number;
    equals(o: Object | null): boolean;
    fromSliderValue(slider: number): number;
    hashCode(): number;
    maxInclusive(): number;
    maxSupplier(): () => number;
    minInclusive(): number;
    next(current: number): Optional<number>;
    previous(current: number): Optional<number>;
    toSliderValue(value: number): number;
    toString(): string;
    validateValue(value: number): Optional<number>;
    valueListSupplier(): CycleButton$ValueListSupplier<number>;
    xmap<R extends unknown>(to: (param0: number) => R, from: (param0: R) => number, discrete: boolean): OptionInstance$SliderableValueSet<R>;
}