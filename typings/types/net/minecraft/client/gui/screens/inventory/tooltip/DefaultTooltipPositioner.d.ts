import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientTooltipPositioner } from '../../../../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipPositioner.d.ts'
import type { Vector2i } from '../../../../../../../org/joml/Vector2i.d.ts'
import type { Vector2ic } from '../../../../../../../org/joml/Vector2ic.d.ts'
export class DefaultTooltipPositioner extends Object implements ClientTooltipPositioner {
    static INSTANCE: ClientTooltipPositioner;
    private constructor()
    positionTooltip(screenWidth: number, screenHeight: number, x: number, y: number, tooltipWidth: number, tooltipHeight: number): Vector2ic;
    // private positionTooltip(screenWidth: number, screenHeight: number, result: Vector2i, tooltipWidth: number, tooltipHeight: number): void;
}