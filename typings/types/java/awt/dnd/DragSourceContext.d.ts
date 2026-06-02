import type { Component } from '../../../java/awt/Component.d.ts'
import type { Cursor } from '../../../java/awt/Cursor.d.ts'
import type { Image } from '../../../java/awt/Image.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { DragGestureEvent } from '../../../java/awt/dnd/DragGestureEvent.d.ts'
import type { DragSource } from '../../../java/awt/dnd/DragSource.d.ts'
import type { DragSourceDragEvent } from '../../../java/awt/dnd/DragSourceDragEvent.d.ts'
import type { DragSourceDropEvent } from '../../../java/awt/dnd/DragSourceDropEvent.d.ts'
import type { DragSourceEvent } from '../../../java/awt/dnd/DragSourceEvent.d.ts'
import type { DragSourceListener } from '../../../java/awt/dnd/DragSourceListener.d.ts'
import type { DragSourceMotionListener } from '../../../java/awt/dnd/DragSourceMotionListener.d.ts'
import type { DragSourceContextPeer } from '../../../java/awt/dnd/peer/DragSourceContextPeer.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DragSourceContext extends Object implements DragSourceListener, DragSourceMotionListener, Serializable {
    constructor(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: Transferable, arg5: DragSourceListener)
    readonly cursor: Cursor;
    // private listener: DragSourceListener;
    // private peer: DragSourceContextPeer;
    readonly sourceActions: number;
    readonly transferable: Transferable;
    readonly trigger: DragGestureEvent;
    // private useCustomCursor: boolean;
    addDragSourceListener(arg0: DragSourceListener): void;
    dragDropEnd(arg0: DragSourceDropEvent): void;
    dragEnter(arg0: DragSourceDragEvent): void;
    dragExit(arg0: DragSourceEvent): void;
    dragMouseMoved(arg0: DragSourceDragEvent): void;
    dragOver(arg0: DragSourceDragEvent): void;
    dropActionChanged(arg0: DragSourceDragEvent): void;
    getComponent(): Component;
    getCursor(): Cursor;
    getDragSource(): DragSource;
    getSourceActions(): number;
    getTransferable(): Transferable;
    getTrigger(): DragGestureEvent;
    // private readObject(arg0: ObjectInputStream): void;
    removeDragSourceListener(arg0: DragSourceListener): void;
    setCursor(arg0: Cursor): void;
    // private setCursorImpl(arg0: Cursor): void;
    transferablesFlavorsChanged(): void;
    updateCurrentCursor(arg0: number, arg1: number, arg2: number): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}