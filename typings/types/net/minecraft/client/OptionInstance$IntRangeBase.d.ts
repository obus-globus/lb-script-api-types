import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$SliderableValueSet } from '../../../net/minecraft/client/OptionInstance$SliderableValueSet.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Tooltip } from '../../../net/minecraft/client/gui/components/Tooltip.d.ts'
export interface OptionInstance$IntRangeBase extends Object, OptionInstance$SliderableValueSet<number> {
    applyValueImmediately(): boolean;
    createButton(tooltip: (param0: number) => Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: number) => void): (param0: OptionInstance<number>) => AbstractWidget;
    fromSliderValue(slider: number): number;
    maxInclusive(): number;
    minInclusive(): number;
    next(current: number): Optional<number>;
    previous(current: number): Optional<number>;
    toSliderValue(value: number): number;
    xmap<R extends Object | number | string | boolean>(to: (param0: number) => R, from: (param0: R) => number, discrete: boolean): OptionInstance$SliderableValueSet<R>;
}