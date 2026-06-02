import type { Cursor } from '../../../../java/awt/Cursor.d.ts'
import type { Image } from '../../../../java/awt/Image.d.ts'
import type { Point } from '../../../../java/awt/Point.d.ts'
import type { DragSourceContext } from '../../../../java/awt/dnd/DragSourceContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DragSourceContextPeer extends Object{
    getCursor(): Cursor;
    setCursor(arg0: Cursor): void;
    startDrag(arg0: DragSourceContext, arg1: Cursor, arg2: Image, arg3: Point): void;
    transferablesFlavorsChanged(): void;
}