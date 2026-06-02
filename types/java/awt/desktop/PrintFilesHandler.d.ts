import type { PrintFilesEvent } from '../../../java/awt/desktop/PrintFilesEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PrintFilesHandler extends Object{
    printFiles(arg0: PrintFilesEvent): void;
}