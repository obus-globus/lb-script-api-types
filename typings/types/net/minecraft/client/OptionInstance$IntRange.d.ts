import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance$IntRangeBase } from '../../../net/minecraft/client/OptionInstance$IntRangeBase.d.ts'
import type { OptionInstance$SliderableValueSet } from '../../../net/minecraft/client/OptionInstance$SliderableValueSet.d.ts'
export class OptionInstance$IntRange extends Record implements OptionInstance$IntRangeBase {
    // private applyValueImmediately: boolean;
    // private maxInclusive: number;
    // private minInclusive: number;
    applyValueImmediately(): boolean;
    codec(): Codec<number>;
    equals(o: Object | null): boolean;
    fromSliderValue(slider: number): number;
    hashCode(): number;
    maxInclusive(): number;
    minInclusive(): number;
    next(current: number): Optional<number>;
    previous(current: number): Optional<number>;
    toSliderValue(value: number): number;
    toString(): string;
    validateValue(value: number): Optional<number>;
    xmap(to: (param0: R) => unknown, from: (param0: R) => kotlin.Int, discrete: boolean): OptionInstance$SliderableValueSet<R>;
}