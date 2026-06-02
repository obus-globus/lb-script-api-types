import type { Component } from '../../../java/awt/Component.d.ts'
import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { DropTarget } from '../../../java/awt/dnd/DropTarget.d.ts'
import type { DropTargetContext } from '../../../java/awt/dnd/DropTargetContext.d.ts'
import type { DropTargetContextPeer } from '../../../java/awt/dnd/peer/DropTargetContextPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SunDropTargetEvent } from '../../../sun/awt/dnd/SunDropTargetEvent.d.ts'
export abstract class SunDropTargetContextPeer extends Object implements Transferable, DropTargetContextPeer {
    static DISPATCH_SYNC: boolean;
    static setCurrentJVMLocalSourceTransferable(paramarg0: Transferable): void;
    constructor()
    // private currentA: number;
    // private currentDA: number;
    // private currentDT: DropTarget;
    // private currentDTC: DropTargetContext;
    // private currentSA: number;
    // private currentT: number[];
    // private dragRejected: boolean;
    // private dropComplete: boolean;
    // private dropInProcess: boolean;
    // private dropStatus: number;
    // private local: Transferable;
    // private nativeDragContext: number;
    // private previousDA: number;
    acceptDrag(arg0: number): void;
    acceptDrop(arg0: number): void;
    doDropDone(arg0: boolean, arg1: number, arg2: boolean): void;
    dropComplete(arg0: boolean): void;
    eventPosted(arg0: SunDropTargetEvent): void;
    eventProcessed(arg0: SunDropTargetEvent, arg1: number, arg2: boolean): void;
    getDropTarget(): DropTarget;
    getNativeData(arg0: number): Object;
    getNativeDragContext(): number;
    getTargetActions(): number;
    getTransferData(arg0: DataFlavor): Object;
    getTransferDataFlavors(): DataFlavor[];
    getTransferable(): Transferable;
    // private handleDropMessage(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
    // private handleEnterMessage(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): number;
    // private handleExitMessage(arg0: Component, arg1: number): void;
    // private handleMotionMessage(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): number;
    isDataFlavorSupported(arg0: DataFlavor): boolean;
    isTransferableJVMLocal(): boolean;
    // private mapOperation(arg0: number): number;
    postDropTargetEvent(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number, arg7: number, arg8: boolean): number;
    processDropMessage(arg0: SunDropTargetEvent): void;
    processEnterMessage(arg0: SunDropTargetEvent): void;
    processExitMessage(arg0: SunDropTargetEvent): void;
    processMotionMessage(arg0: SunDropTargetEvent, arg1: boolean): void;
    rejectDrag(): void;
    rejectDrop(): void;
    setTargetActions(arg0: number): void;
}