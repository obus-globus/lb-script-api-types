import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
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
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { CycleButton$ValueListSupplier } from '../../../net/minecraft/client/gui/components/CycleButton$ValueListSupplier.d.ts'
export class OptionInstance$ClampingLazyMaxIntRange extends Record implements OptionInstance$IntRangeBase, OptionInstance$SliderableOrCyclableValueSet<number> {
    // private encodableMaxInclusive: number;
    // private maxSupplier: () => kotlin.Int;
    // private minInclusive: number;
    codec(): Codec<number>;
    createButton(tooltip: (param0: T) => net.minecraft.client.gui.components.Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): (param0: OptionInstance<T>) => AbstractWidget;
    createCycleButton(): boolean;
    encodableMaxInclusive(): number;
    equals(o: Object | null): boolean;
    fromSliderValue(slider: number): number;
    hashCode(): number;
    maxInclusive(): number;
    maxSupplier(): () => kotlin.Int;
    minInclusive(): number;
    next(current: number): Optional<number>;
    previous(current: number): Optional<number>;
    toSliderValue(value: number): number;
    toString(): string;
    validateValue(value: number): Optional<number>;
    valueListSupplier(): CycleButton$ValueListSupplier<number>;
    xmap(to: (param0: R) => unknown, from: (param0: R) => kotlin.Int, discrete: boolean): OptionInstance$SliderableValueSet<R>;
}