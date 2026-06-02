import type { Point } from '../../../java/awt/Point.d.ts'
import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { DropTargetContext } from '../../../java/awt/dnd/DropTargetContext.d.ts'
import type { DropTargetEvent } from '../../../java/awt/dnd/DropTargetEvent.d.ts'
export class DropTargetDropEvent extends DropTargetEvent {
    constructor(arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number)
    constructor(arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number, arg4: boolean)
    // private actions: number;
    readonly dropAction: number;
    // private isLocalTx: boolean;
    readonly location: Point;
    acceptDrop(arg0: number): void;
    dropComplete(arg0: boolean): void;
    getCurrentDataFlavors(): DataFlavor[];
    getCurrentDataFlavorsAsList(): DataFlavor[];
    getDropAction(): number;
    getLocation(): Point;
    getSourceActions(): number;
    getTransferable(): Transferable;
    isDataFlavorSupported(arg0: DataFlavor): boolean;
    isLocalTransfer(): boolean;
    rejectDrop(): void;
}