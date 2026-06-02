import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$CycleableValueSet$ValueSetter } from '../../../net/minecraft/client/OptionInstance$CycleableValueSet$ValueSetter.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { OptionInstance$ValueSet } from '../../../net/minecraft/client/OptionInstance$ValueSet.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { CycleButton$ValueListSupplier } from '../../../net/minecraft/client/gui/components/CycleButton$ValueListSupplier.d.ts'
export interface OptionInstance$CycleableValueSet<T extends Object | number | string | boolean> extends Object, OptionInstance$ValueSet<T>{
    createButton(tooltip: (param0: T) => net.minecraft.client.gui.components.Tooltip, options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): (param0: OptionInstance<T>) => AbstractWidget;
    valueListSupplier(): CycleButton$ValueListSupplier<T>;
    valueSetter(): OptionInstance$CycleableValueSet$ValueSetter<T>;
}