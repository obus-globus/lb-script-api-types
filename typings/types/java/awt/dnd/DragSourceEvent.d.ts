import type { Point } from '../../../java/awt/Point.d.ts'
import type { DragSourceContext } from '../../../java/awt/dnd/DragSourceContext.d.ts'
import type { EventObject } from '../../../java/util/EventObject.d.ts'
export class DragSourceEvent extends EventObject {
    constructor(arg0: DragSourceContext)
    constructor(arg0: DragSourceContext, arg1: number, arg2: number)
    // private locationSpecified: boolean;
    readonly x: number;
    readonly y: number;
    getDragSourceContext(): DragSourceContext;
    getLocation(): Point;
    getX(): number;
    getY(): number;
}