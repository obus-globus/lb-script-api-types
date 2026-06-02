import type { Component } from '../../../java/awt/Component.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { DragGestureListener } from '../../../java/awt/dnd/DragGestureListener.d.ts'
import type { DragSource } from '../../../java/awt/dnd/DragSource.d.ts'
import type { InputEvent } from '../../../java/awt/event/InputEvent.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DragGestureRecognizer extends Object implements Serializable {
    constructor(arg0: DragSource)
    constructor(arg0: DragSource, arg1: Component)
    constructor(arg0: DragSource, arg1: Component, arg2: number)
    constructor(arg0: DragSource, arg1: Component, arg2: number, arg3: DragGestureListener)
    component: Component;
    // private dragGestureListener: DragGestureListener;
    dragSource: DragSource;
    // private events: InputEvent[];
    sourceActions: number;
    addDragGestureListener(arg0: DragGestureListener): void;
    appendEvent(arg0: InputEvent): void;
    fireDragGestureRecognized(arg0: number, arg1: Point): void;
    getComponent(): Component;
    getDragSource(): DragSource;
    getSourceActions(): number;
    getTriggerEvent(): InputEvent;
    // private readObject(arg0: ObjectInputStream): void;
    registerListeners(): void;
    removeDragGestureListener(arg0: DragGestureListener): void;
    resetRecognizer(): void;
    setComponent(arg0: Component): void;
    setSourceActions(arg0: number): void;
    unregisterListeners(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}