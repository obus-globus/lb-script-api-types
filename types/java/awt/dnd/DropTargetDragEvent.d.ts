import type { Point } from '../../../java/awt/Point.d.ts'
import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { DropTargetContext } from '../../../java/awt/dnd/DropTargetContext.d.ts'
import type { DropTargetEvent } from '../../../java/awt/dnd/DropTargetEvent.d.ts'
export class DropTargetDragEvent extends DropTargetEvent {
    constructor(arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number)
    // private actions: number;
    readonly dropAction: number;
    readonly location: Point;
    acceptDrag(arg0: number): void;
    getCurrentDataFlavors(): DataFlavor[];
    getCurrentDataFlavorsAsList(): DataFlavor[];
    getDropAction(): number;
    getLocation(): Point;
    getSourceActions(): number;
    getTransferable(): Transferable;
    isDataFlavorSupported(arg0: DataFlavor): boolean;
    rejectDrag(): void;
}