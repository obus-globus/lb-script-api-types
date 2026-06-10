import type { Component } from '../../../java/awt/Component.d.ts'
import type { Cursor } from '../../../java/awt/Cursor.d.ts'
import type { Image } from '../../../java/awt/Image.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { FlavorMap } from '../../../java/awt/datatransfer/FlavorMap.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { DragGestureEvent } from '../../../java/awt/dnd/DragGestureEvent.d.ts'
import type { DragGestureListener } from '../../../java/awt/dnd/DragGestureListener.d.ts'
import type { DragGestureRecognizer } from '../../../java/awt/dnd/DragGestureRecognizer.d.ts'
import type { DragSourceContext } from '../../../java/awt/dnd/DragSourceContext.d.ts'
import type { DragSourceDragEvent } from '../../../java/awt/dnd/DragSourceDragEvent.d.ts'
import type { DragSourceDropEvent } from '../../../java/awt/dnd/DragSourceDropEvent.d.ts'
import type { DragSourceEvent } from '../../../java/awt/dnd/DragSourceEvent.d.ts'
import type { DragSourceListener } from '../../../java/awt/dnd/DragSourceListener.d.ts'
import type { DragSourceMotionListener } from '../../../java/awt/dnd/DragSourceMotionListener.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DragSource extends Object implements Serializable {
    static DefaultCopyDrop: Cursor;
    static DefaultCopyNoDrop: Cursor;
    static DefaultLinkDrop: Cursor;
    static DefaultLinkNoDrop: Cursor;
    static DefaultMoveDrop: Cursor;
    static DefaultMoveNoDrop: Cursor;
    static getDefaultDragSource(): DragSource;
    static getDragThreshold(): number;
    static isDragImageSupported(): boolean;
    constructor()
    readonly flavorMap: FlavorMap;
    // private listener: DragSourceListener;
    // private motionListener: DragSourceMotionListener;
    addDragSourceListener(arg0: DragSourceListener): void;
    addDragSourceMotionListener(arg0: DragSourceMotionListener): void;
    createDefaultDragGestureRecognizer(arg0: Component, arg1: number, arg2: DragGestureListener): DragGestureRecognizer;
    createDragGestureRecognizer<T extends DragGestureRecognizer>(arg0: Class<T>, arg1: Component, arg2: number, arg3: DragGestureListener): T;
    createDragSourceContext(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: Transferable, arg5: DragSourceListener): DragSourceContext;
    getDragSourceListeners(): DragSourceListener[];
    getDragSourceMotionListeners(): DragSourceMotionListener[];
    getFlavorMap(): FlavorMap;
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    processDragDropEnd(arg0: DragSourceDropEvent): void;
    processDragEnter(arg0: DragSourceDragEvent): void;
    processDragExit(arg0: DragSourceEvent): void;
    processDragMouseMoved(arg0: DragSourceDragEvent): void;
    processDragOver(arg0: DragSourceDragEvent): void;
    processDropActionChanged(arg0: DragSourceDragEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeDragSourceListener(arg0: DragSourceListener): void;
    removeDragSourceMotionListener(arg0: DragSourceMotionListener): void;
    startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: Transferable, arg5: DragSourceListener): void;
    startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: Transferable, arg5: DragSourceListener, arg6: FlavorMap): void;
    startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Transferable, arg3: DragSourceListener): void;
    startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Transferable, arg3: DragSourceListener, arg4: FlavorMap): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}