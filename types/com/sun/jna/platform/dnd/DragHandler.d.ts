import type { GhostedDragImage } from '../../../../../com/sun/jna/platform/dnd/GhostedDragImage.d.ts'
import type { Component } from '../../../../../java/awt/Component.d.ts'
import type { Cursor } from '../../../../../java/awt/Cursor.d.ts'
import type { Dimension } from '../../../../../java/awt/Dimension.d.ts'
import type { GraphicsConfiguration } from '../../../../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../../../../java/awt/Image.d.ts'
import type { Point } from '../../../../../java/awt/Point.d.ts'
import type { Transferable } from '../../../../../java/awt/datatransfer/Transferable.d.ts'
import type { DragGestureEvent } from '../../../../../java/awt/dnd/DragGestureEvent.d.ts'
import type { DragGestureListener } from '../../../../../java/awt/dnd/DragGestureListener.d.ts'
import type { DragSourceDragEvent } from '../../../../../java/awt/dnd/DragSourceDragEvent.d.ts'
import type { DragSourceDropEvent } from '../../../../../java/awt/dnd/DragSourceDropEvent.d.ts'
import type { DragSourceEvent } from '../../../../../java/awt/dnd/DragSourceEvent.d.ts'
import type { DragSourceListener } from '../../../../../java/awt/dnd/DragSourceListener.d.ts'
import type { DragSourceMotionListener } from '../../../../../java/awt/dnd/DragSourceMotionListener.d.ts'
import type { DropTargetEvent } from '../../../../../java/awt/dnd/DropTargetEvent.d.ts'
import type { Icon } from '../../../../../javax/swing/Icon.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DragHandler extends Object implements DragGestureListener, DragSourceListener, DragSourceMotionListener {
    static DEFAULT_GHOST_ALPHA: number;
    static MAX_GHOST_SIZE: Dimension;
    static UNKNOWN_MODIFIERS: number;
    static UNKNOWN_TRANSFERABLE: Transferable;
    static getTransferable(paramarg0: DropTargetEvent): Transferable;
    constructor(arg0: Component, arg1: number)
    // private dragSource: Component;
    // private fixCursor: boolean;
    // private ghost: GhostedDragImage;
    // private ghostAlpha: number;
    // private imageOffset: Point;
    // private lastAction: string;
    // private maxGhostSize: Dimension;
    // private moved: boolean;
    // private supportedActions: number;
    adjustDropAction(arg0: DragSourceEvent): number;
    canDrag(arg0: DragGestureEvent): boolean;
    createDragImage(arg0: GraphicsConfiguration, arg1: Icon): Image;
    // private describe(arg0: string, arg1: DragSourceEvent): void;
    // private disableSwingDragSupport(arg0: Component): void;
    dragDropEnd(arg0: DragSourceDropEvent): void;
    dragEnter(arg0: DragSourceDragEvent): void;
    dragExit(arg0: DragSourceEvent): void;
    dragGestureRecognized(arg0: DragGestureEvent): void;
    dragMouseMoved(arg0: DragSourceDragEvent): void;
    dragOver(arg0: DragSourceDragEvent): void;
    dragStarted(arg0: DragGestureEvent): void;
    dropActionChanged(arg0: DragSourceDragEvent): void;
    getAcceptableDropAction(arg0: number): number;
    getCursorForAction(arg0: number): Cursor;
    getDragIcon(arg0: DragGestureEvent, arg1: Point): Icon;
    getDropAction(arg0: DragSourceEvent): number;
    // private getImageLocation(arg0: Point): Point;
    getTransferable(arg0: DragGestureEvent): Transferable;
    // private reduce(arg0: number): number;
    scaleDragIcon(arg0: Icon, arg1: Point): Icon;
    setModifiers(arg0: number): void;
    updateCursor(arg0: DragSourceEvent): void;
}