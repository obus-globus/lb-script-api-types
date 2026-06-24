import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$CycleableValueSet } from '../../../net/minecraft/client/OptionInstance$CycleableValueSet.d.ts'
import type { OptionInstance$CycleableValueSet$ValueSetter } from '../../../net/minecraft/client/OptionInstance$CycleableValueSet$ValueSetter.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { OptionInstance$ValueUpdateListener } from '../../../net/minecraft/client/OptionInstance$ValueUpdateListener.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { CycleButton$ValueListSupplier } from '../../../net/minecraft/client/gui/components/CycleButton$ValueListSupplier.d.ts'
import type { Tooltip } from '../../../net/minecraft/client/gui/components/Tooltip.d.ts'
export class OptionInstance$LazyEnum<T extends unknown> extends Record implements OptionInstance$CycleableValueSet<T> {
    constructor(values: () => T[], validateValue: (param0: T) => Optional<T>, codec: Codec<T>)
    // private codec: Codec<T>;
    // private validateValue: (param0: T) => Optional<T>;
    // private values: () => T[];
    codec(): Codec<T>;
    createButton(tooltip: (param0: T) => Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): (param0: OptionInstance<T>) => AbstractWidget;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    validateValue(): (param0: T) => Optional<T>;
    validateValue(value: T): Optional<T>;
    valueListSupplier(): CycleButton$ValueListSupplier<T>;
    valueSetter(): OptionInstance$CycleableValueSet$ValueSetter<T>;
    values(): () => T[];
}