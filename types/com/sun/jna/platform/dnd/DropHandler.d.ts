import type { DropTargetPainter } from '../../../../../com/sun/jna/platform/dnd/DropTargetPainter.d.ts'
import type { Component } from '../../../../../java/awt/Component.d.ts'
import type { Point } from '../../../../../java/awt/Point.d.ts'
import type { DataFlavor } from '../../../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { DropTarget } from '../../../../../java/awt/dnd/DropTarget.d.ts'
import type { DropTargetDragEvent } from '../../../../../java/awt/dnd/DropTargetDragEvent.d.ts'
import type { DropTargetDropEvent } from '../../../../../java/awt/dnd/DropTargetDropEvent.d.ts'
import type { DropTargetEvent } from '../../../../../java/awt/dnd/DropTargetEvent.d.ts'
import type { DropTargetListener } from '../../../../../java/awt/dnd/DropTargetListener.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DropHandler extends Object implements DropTargetListener {
    constructor(arg0: Component, arg1: number)
    constructor(arg0: Component, arg1: number, arg2: DataFlavor[])
    constructor(arg0: Component, arg1: number, arg2: DataFlavor[], arg3: DropTargetPainter)
    // private acceptedActions: number;
    // private acceptedFlavors: DataFlavor[];
    readonly active: boolean;
    // private dropTarget: DropTarget;
    // private lastAction: string;
    // private painter: DropTargetPainter;
    acceptOrReject(arg0: DropTargetDragEvent): number;
    canDrop(arg0: DropTargetEvent, arg1: number, arg2: Point): boolean;
    // private describe(arg0: string, arg1: DropTargetEvent): void;
    dragEnter(arg0: DropTargetDragEvent): void;
    dragExit(arg0: DropTargetEvent): void;
    dragOver(arg0: DropTargetDragEvent): void;
    drop(arg0: DropTargetDropEvent): void;
    drop(arg0: DropTargetDropEvent, arg1: number): void;
    dropActionChanged(arg0: DropTargetDragEvent): void;
    getDropAction(arg0: DropTargetEvent): number;
    getDropAction(arg0: DropTargetEvent, arg1: number, arg2: number, arg3: number): number;
    getDropActionsForFlavors(arg0: DataFlavor[]): number;
    getDropTarget(): DropTarget;
    isActive(): boolean;
    isSupported(arg0: DataFlavor[]): boolean;
    modifiersActive(arg0: number): boolean;
    paintDropTarget(arg0: DropTargetEvent, arg1: number, arg2: Point): void;
    setActive(arg0: boolean): void;
}