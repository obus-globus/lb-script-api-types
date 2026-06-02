import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WidgetTooltipHolder } from '../../../../net/minecraft/client/gui/components/WidgetTooltipHolder.d.ts'
export interface AccessorAbstractWidget extends Object{
    getTooltip(): WidgetTooltipHolder;
}