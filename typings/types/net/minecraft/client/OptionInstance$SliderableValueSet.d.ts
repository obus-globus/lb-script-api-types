import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { OptionInstance$ValueSet } from '../../../net/minecraft/client/OptionInstance$ValueSet.d.ts'
import type { OptionInstance$ValueUpdateListener } from '../../../net/minecraft/client/OptionInstance$ValueUpdateListener.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Tooltip } from '../../../net/minecraft/client/gui/components/Tooltip.d.ts'
export interface OptionInstance$SliderableValueSet<T extends unknown> extends Object, OptionInstance$ValueSet<T> {
    applyValueImmediately(): boolean;
    createButton(tooltip: (param0: T) => Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): (param0: OptionInstance<T>) => AbstractWidget;
    fromSliderValue(slider: number): T;
    next(current: T): Optional<T>;
    previous(current: T): Optional<T>;
    toSliderValue(value: T): number;
}