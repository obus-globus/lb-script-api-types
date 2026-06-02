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
export interface OptionInstance$IntRangeBase extends Object, OptionInstance$SliderableValueSet<number>{
    applyValueImmediately(): boolean;
    createButton(tooltip: (param0: T) => net.minecraft.client.gui.components.Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): (param0: OptionInstance<T>) => AbstractWidget;
    fromSliderValue(slider: number): number;
    maxInclusive(): number;
    minInclusive(): number;
    next(current: number): Optional<number>;
    next<T extends Object | number | string | boolean>(current: T): Optional<T>;
    previous(current: number): Optional<number>;
    previous<T extends Object | number | string | boolean>(current: T): Optional<T>;
    toSliderValue(value: number): number;
    xmap(to: (param0: R) => unknown, from: (param0: R) => kotlin.Int, discrete: boolean): OptionInstance$SliderableValueSet<R>;
}