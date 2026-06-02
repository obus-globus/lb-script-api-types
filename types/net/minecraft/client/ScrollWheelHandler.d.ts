import type { Object } from '../../../java/lang/Object.d.ts'
import type { Vector2i } from '../../../org/joml/Vector2i.d.ts'
export class ScrollWheelHandler extends Object {
    static getNextScrollWheelSelection(paramwheel: number, paramcurrentSelected: number, paramlimit: number): number;
    constructor()
    // private accumulatedScrollX: number;
    // private accumulatedScrollY: number;
    onMouseScroll(scaledXScrollOffset: number, scaledYScrollOffset: number): Vector2i;
}