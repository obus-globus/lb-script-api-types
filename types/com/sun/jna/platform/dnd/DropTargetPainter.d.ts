import type { Point } from '../../../../../java/awt/Point.d.ts'
import type { DropTargetEvent } from '../../../../../java/awt/dnd/DropTargetEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DropTargetPainter extends Object{
    paintDropTarget(arg0: DropTargetEvent, arg1: number, arg2: Point): void;
}