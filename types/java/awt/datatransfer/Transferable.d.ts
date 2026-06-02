import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Transferable extends Object{
    getTransferData(arg0: DataFlavor): Object;
    getTransferDataFlavors(): DataFlavor[];
    isDataFlavorSupported(arg0: DataFlavor): boolean;
}