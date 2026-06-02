import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vector2ic } from '../../../../../../../org/joml/Vector2ic.d.ts'
export interface ClientTooltipPositioner extends Object{
    positionTooltip(screenWidth: number, screenHeight: number, x: number, y: number, tooltipWidth: number, tooltipHeight: number): Vector2ic;
}