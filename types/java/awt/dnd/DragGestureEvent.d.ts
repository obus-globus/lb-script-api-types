import type { Component } from '../../../java/awt/Component.d.ts'
import type { Cursor } from '../../../java/awt/Cursor.d.ts'
import type { Image } from '../../../java/awt/Image.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { DragGestureRecognizer } from '../../../java/awt/dnd/DragGestureRecognizer.d.ts'
import type { DragSource } from '../../../java/awt/dnd/DragSource.d.ts'
import type { DragSourceListener } from '../../../java/awt/dnd/DragSourceListener.d.ts'
import type { InputEvent } from '../../../java/awt/event/InputEvent.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class DragGestureEvent extends EventObject {
    constructor(arg0: DragGestureRecognizer, arg1: number, arg2: Point, arg3: InputEvent[])
    // private action: number;
    readonly component: Component;
    readonly dragSource: DragSource;
    // private events: (Object | null)[];
    // private origin: Point;
    getComponent(): Component;
    getDragAction(): number;
    getDragOrigin(): Point;
    getDragSource(): DragSource;
    getSourceAsDragGestureRecognizer(): DragGestureRecognizer;
    getTriggerEvent(): InputEvent;
    iterator(): Iterator<InputEvent>;
    // private readObject(arg0: ObjectInputStream): void;
    startDrag(arg0: Cursor, arg1: Image, arg2: Point, arg3: Transferable, arg4: DragSourceListener): void;
    startDrag(arg0: Cursor, arg1: Transferable): void;
    startDrag(arg0: Cursor, arg1: Transferable, arg2: DragSourceListener): void;
    toArray(): Object[];
    toArray(arg0: Object[]): Object[];
    // private writeObject(arg0: ObjectOutputStream): void;
}