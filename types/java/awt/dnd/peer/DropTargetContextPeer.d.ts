import type { DataFlavor } from '../../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Transferable } from '../../../../java/awt/datatransfer/Transferable.d.ts'
import type { DropTarget } from '../../../../java/awt/dnd/DropTarget.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DropTargetContextPeer extends Object{
    acceptDrag(arg0: number): void;
    acceptDrop(arg0: number): void;
    dropComplete(arg0: boolean): void;
    getDropTarget(): DropTarget;
    getTargetActions(): number;
    getTransferDataFlavors(): DataFlavor[];
    getTransferable(): Transferable;
    isTransferableJVMLocal(): boolean;
    rejectDrag(): void;
    rejectDrop(): void;
    setTargetActions(arg0: number): void;
}