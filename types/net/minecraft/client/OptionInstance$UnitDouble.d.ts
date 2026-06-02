import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { DoubleFunction } from '../../../java/util/function/DoubleFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$SliderableValueSet } from '../../../net/minecraft/client/OptionInstance$SliderableValueSet.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
export class OptionInstance$UnitDouble extends Enum<OptionInstance$UnitDouble> implements OptionInstance$SliderableValueSet<number> {
    static INSTANCE: OptionInstance$UnitDouble;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): OptionInstance$UnitDouble;
    static values(): (Object | null)[];
    private constructor()
    applyValueImmediately(): boolean;
    codec(): Codec<number>;
    createButton(tooltip: (param0: T) => net.minecraft.client.gui.components.Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): (param0: OptionInstance<T>) => AbstractWidget;
    fromSliderValue(slider: number): number;
    next<T extends Object | number | string | boolean>(current: T): Optional<T>;
    previous<T extends Object | number | string | boolean>(current: T): Optional<T>;
    toSliderValue(value: number): number;
    validateValue(value: number): Optional<number>;
    xmap(to: (param0: R) => unknown, from: (param0: R) => kotlin.Double): OptionInstance$SliderableValueSet<R>;
    name(): "INSTANCE";
}