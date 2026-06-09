import type { DialogPeer } from '../../../java/awt/peer/DialogPeer.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { FilenameFilter } from '../../../java/io/FilenameFilter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FileDialogPeer extends DialogPeer, Object {
    setDirectory(arg0: string): void;
    setFile(arg0: string): void;
    setFilenameFilter(arg0: (param0: File, param1: string) => kotlin.Boolean): void;
}