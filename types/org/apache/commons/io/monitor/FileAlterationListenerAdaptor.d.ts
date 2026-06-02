import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileAlterationListener } from '../../../../../org/apache/commons/io/monitor/FileAlterationListener.d.ts'
import type { FileAlterationObserver } from '../../../../../org/apache/commons/io/monitor/FileAlterationObserver.d.ts'
export class FileAlterationListenerAdaptor extends Object implements FileAlterationListener {
    constructor()
    onDirectoryChange(arg0: File): void;
    onDirectoryCreate(arg0: File): void;
    onDirectoryDelete(arg0: File): void;
    onFileChange(arg0: File): void;
    onFileCreate(arg0: File): void;
    onFileDelete(arg0: File): void;
    onStart(arg0: FileAlterationObserver): void;
    onStop(arg0: FileAlterationObserver): void;
}