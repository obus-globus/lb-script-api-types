import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { DoubleFunction } from '../../../java/util/function/DoubleFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$SliderableValueSet } from '../../../net/minecraft/client/OptionInstance$SliderableValueSet.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { OptionInstance$ValueUpdateListener } from '../../../net/minecraft/client/OptionInstance$ValueUpdateListener.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Tooltip } from '../../../net/minecraft/client/gui/components/Tooltip.d.ts'
export class OptionInstance$UnitDouble extends Enum<OptionInstance$UnitDouble> implements OptionInstance$SliderableValueSet<number> {
    static INSTANCE: OptionInstance$UnitDouble;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): OptionInstance$UnitDouble;
    static values(): OptionInstance$UnitDouble[];
    private constructor()
    applyValueImmediately(): boolean;
    codec(): Codec<number>;
    createButton(tooltip: (param0: number) => Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: number) => void): (param0: OptionInstance<number>) => AbstractWidget;
    fromSliderValue(slider: number): number;
    next(current: number): Optional<number>;
    previous(current: number): Optional<number>;
    toSliderValue(value: number): number;
    validateValue(value: number): Optional<number>;
    xmap<R extends unknown>(to: (param0: number) => R, from: (param0: R) => number): OptionInstance$SliderableValueSet<R>;
    name(): "INSTANCE";
}