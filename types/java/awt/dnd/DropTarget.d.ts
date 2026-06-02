import type { Component } from '../../../java/awt/Component.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { FlavorMap } from '../../../java/awt/datatransfer/FlavorMap.d.ts'
import type { DropTarget$DropTargetAutoScroller } from '../../../java/awt/dnd/DropTarget$DropTargetAutoScroller.d.ts'
import type { DropTargetContext } from '../../../java/awt/dnd/DropTargetContext.d.ts'
import type { DropTargetDragEvent } from '../../../java/awt/dnd/DropTargetDragEvent.d.ts'
import type { DropTargetDropEvent } from '../../../java/awt/dnd/DropTargetDropEvent.d.ts'
import type { DropTargetEvent } from '../../../java/awt/dnd/DropTargetEvent.d.ts'
import type { DropTargetListener } from '../../../java/awt/dnd/DropTargetListener.d.ts'
import type { DropTargetPeer } from '../../../java/awt/dnd/peer/DropTargetPeer.d.ts'
import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DropTarget extends Object implements DropTargetListener, Serializable {
    constructor()
    constructor(arg0: Component, arg1: DropTargetListener)
    constructor(arg0: Component, arg1: number, arg2: DropTargetListener)
    constructor(arg0: Component, arg1: number, arg2: DropTargetListener, arg3: boolean)
    constructor(arg0: Component, arg1: number, arg2: DropTargetListener, arg3: boolean, arg4: FlavorMap)
    // private actions: number;
    active: boolean;
    // private autoScroller: DropTarget$DropTargetAutoScroller;
    readonly component: Component;
    // private componentPeer: ComponentPeer;
    readonly dropTargetContext: DropTargetContext;
    // private dtListener: DropTargetListener;
    readonly flavorMap: FlavorMap;
    // private isDraggingInside: boolean;
    // private nativePeer: DropTargetPeer;
    addDropTargetListener(arg0: DropTargetListener): void;
    addNotify(): void;
    clearAutoscroll(): void;
    createDropTargetAutoScroller(arg0: Component, arg1: Point): DropTarget$DropTargetAutoScroller;
    createDropTargetContext(): DropTargetContext;
    doSetDefaultActions(arg0: number): void;
    dragEnter(arg0: DropTargetDragEvent): void;
    dragExit(arg0: DropTargetEvent): void;
    dragOver(arg0: DropTargetDragEvent): void;
    drop(arg0: DropTargetDropEvent): void;
    dropActionChanged(arg0: DropTargetDragEvent): void;
    getComponent(): Component;
    getDefaultActions(): number;
    getDropTargetContext(): DropTargetContext;
    getFlavorMap(): FlavorMap;
    initializeAutoscrolling(arg0: Point): void;
    isActive(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    removeDropTargetListener(arg0: DropTargetListener): void;
    removeNotify(): void;
    setActive(arg0: boolean): void;
    setComponent(arg0: Component): void;
    setDefaultActions(arg0: number): void;
    setFlavorMap(arg0: FlavorMap): void;
    updateAutoscroll(arg0: Point): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}