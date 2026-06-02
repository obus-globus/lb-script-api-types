import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$CycleableValueSet } from '../../../net/minecraft/client/OptionInstance$CycleableValueSet.d.ts'
import type { OptionInstance$CycleableValueSet$ValueSetter } from '../../../net/minecraft/client/OptionInstance$CycleableValueSet$ValueSetter.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { CycleButton$ValueListSupplier } from '../../../net/minecraft/client/gui/components/CycleButton$ValueListSupplier.d.ts'
export class OptionInstance$Enum<T extends Object | number | string | boolean> extends Record implements OptionInstance$CycleableValueSet<T> {
    constructor(values: T[], codec: Codec<T>)
    // private codec: Codec<T>;
    // private values: T[];
    codec(): Codec<T>;
    createButton(tooltip: (param0: T) => net.minecraft.client.gui.components.Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): (param0: OptionInstance<T>) => AbstractWidget;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    validateValue(value: T): Optional<T>;
    valueListSupplier(): CycleButton$ValueListSupplier<T>;
    valueSetter(): OptionInstance$CycleableValueSet$ValueSetter<T>;
    values(): T[];
}