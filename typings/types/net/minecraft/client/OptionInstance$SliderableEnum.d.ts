import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$SliderableValueSet } from '../../../net/minecraft/client/OptionInstance$SliderableValueSet.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Tooltip } from '../../../net/minecraft/client/gui/components/Tooltip.d.ts'
export class OptionInstance$SliderableEnum<T extends unknown> extends Record implements OptionInstance$SliderableValueSet<T> {
    constructor(values: T[], codec: Codec<T>)
    // private codec: Codec<T>;
    // private values: T[];
    applyValueImmediately(): boolean;
    codec(): Codec<T>;
    createButton(tooltip: (param0: T) => Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): (param0: OptionInstance<T>) => AbstractWidget;
    equals(o: Object | null): boolean;
    fromSliderValue(slider: number): T;
    hashCode(): number;
    next(current: T): Optional<T>;
    previous(current: T): Optional<T>;
    toSliderValue(value: T): number;
    toString(): string;
    validateValue(value: T): Optional<T>;
    values(): T[];
}