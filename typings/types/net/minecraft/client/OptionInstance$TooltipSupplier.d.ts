import type { Object } from '../../../java/lang/Object.d.ts'
import type { Tooltip } from '../../../net/minecraft/client/gui/components/Tooltip.d.ts'
export interface OptionInstance$TooltipSupplier<T extends unknown> extends Object{
    apply(value: T): Tooltip;
}