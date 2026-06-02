import type { Component } from '../../../java/awt/Component.d.ts'
import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { DropTarget } from '../../../java/awt/dnd/DropTarget.d.ts'
import type { DropTargetContextPeer } from '../../../java/awt/dnd/peer/DropTargetContextPeer.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DropTargetContext extends Object implements Serializable {
    constructor(arg0: DropTarget)
    readonly dropTarget: DropTarget;
    // private dropTargetContextPeer: DropTargetContextPeer;
    // private transferable: Transferable;
    acceptDrag(arg0: number): void;
    acceptDrop(arg0: number): void;
    createTransferableProxy(arg0: Transferable, arg1: boolean): Transferable;
    dropComplete(arg0: boolean): void;
    getComponent(): Component;
    getCurrentDataFlavors(): DataFlavor[];
    getCurrentDataFlavorsAsList(): DataFlavor[];
    getDropTarget(): DropTarget;
    getDropTargetContextPeer(): DropTargetContextPeer;
    getTargetActions(): number;
    getTransferable(): Transferable;
    isDataFlavorSupported(arg0: DataFlavor): boolean;
    rejectDrag(): void;
    rejectDrop(): void;
    reset(): void;
    setDropTargetContextPeer(arg0: DropTargetContextPeer): void;
    setTargetActions(arg0: number): void;
}