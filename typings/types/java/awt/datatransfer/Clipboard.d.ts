import type { ClipboardOwner } from '../../../java/awt/datatransfer/ClipboardOwner.d.ts'
import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { FlavorListener } from '../../../java/awt/datatransfer/FlavorListener.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Clipboard extends Object {
    constructor(arg0: string)
    // private contents: Transferable;
    // private currentDataFlavors: DataFlavor[];
    readonly flavorListeners: FlavorListener[];
    name: string;
    // private owner: ClipboardOwner;
    addFlavorListener(arg0: FlavorListener): void;
    // private fireFlavorsChanged(): void;
    // private getAvailableDataFlavorSet(): DataFlavor[];
    getAvailableDataFlavors(): DataFlavor[];
    getContents(arg0: Object): Transferable;
    getData(arg0: DataFlavor): Object;
    getFlavorListeners(): FlavorListener[];
    getName(): string;
    isDataFlavorAvailable(arg0: DataFlavor): boolean;
    removeFlavorListener(arg0: FlavorListener): void;
    setContents(arg0: Transferable, arg1: ClipboardOwner): void;
}