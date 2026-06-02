import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientTooltipComponent } from '../../../../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipComponent.d.ts'
import type { TooltipComponent } from '../../../../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
export interface ClientTooltipComponentCallback extends Object{
    getClientComponent(arg0: TooltipComponent): ClientTooltipComponent;
}