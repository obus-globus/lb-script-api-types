import type { Clipboard } from '../../../java/awt/datatransfer/Clipboard.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ClipboardOwner extends Object{
    lostOwnership(arg0: Clipboard, arg1: Transferable): void;
}