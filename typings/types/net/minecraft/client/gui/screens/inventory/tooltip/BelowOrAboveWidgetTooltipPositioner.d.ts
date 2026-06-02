import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { ClientTooltipPositioner } from '../../../../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipPositioner.d.ts'
import type { Vector2ic } from '../../../../../../../org/joml/Vector2ic.d.ts'
export class BelowOrAboveWidgetTooltipPositioner extends Object implements ClientTooltipPositioner {
    constructor(screenRectangle: ScreenRectangle)
    // private screenRectangle: ScreenRectangle;
    positionTooltip(screenWidth: number, screenHeight: number, x: number, y: number, tooltipWidth: number, tooltipHeight: number): Vector2ic;
}