import type { Component } from '../../java/awt/Component.d.ts'
import type { DataFlavor } from '../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Transferable } from '../../java/awt/datatransfer/Transferable.d.ts'
import type { DropTargetEvent } from '../../java/awt/dnd/DropTargetEvent.d.ts'
import type { TransferHandler$DropLocation } from '../../javax/swing/TransferHandler$DropLocation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class TransferHandler$TransferSupport extends Object {
    constructor(arg0: Component, arg1: Transferable)
    private constructor(arg0: Component, arg1: DropTargetEvent)
    readonly component: Component;
    readonly dropAction: number;
    readonly dropLocation: TransferHandler$DropLocation;
    // private isDrop: boolean;
    readonly showDropLocation: boolean;
    // private showDropLocationIsSet: boolean;
    // private source: Object;
    // private assureIsDrop(): void;
    getComponent(): Component;
    getDataFlavors(): DataFlavor[];
    getDropAction(): number;
    getDropLocation(): TransferHandler$DropLocation;
    getSourceDropActions(): number;
    getTransferable(): Transferable;
    getUserDropAction(): number;
    isDataFlavorSupported(arg0: DataFlavor): boolean;
    isDrop(): boolean;
    // private setDNDVariables(arg0: Component, arg1: DropTargetEvent): void;
    setDropAction(arg0: number): void;
    setShowDropLocation(arg0: boolean): void;
}