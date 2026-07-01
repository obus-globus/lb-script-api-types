import type { File } from '../../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../../java/io/FileFilter.d.ts'
import type { IOCase } from '../../../../../org/apache/commons/io/IOCase.d.ts'
import type { AbstractOriginSupplier } from '../../../../../org/apache/commons/io/build/AbstractOriginSupplier.d.ts'
import type { FileAlterationObserver } from '../../../../../org/apache/commons/io/monitor/FileAlterationObserver.d.ts'
import type { FileEntry } from '../../../../../org/apache/commons/io/monitor/FileEntry.d.ts'
export class FileAlterationObserver$Builder extends AbstractOriginSupplier<FileAlterationObserver, FileAlterationObserver$Builder> {
    constructor(arg0: any)
    // private fileFilter: (param0: File) => boolean;
    // private ioCase: IOCase;
    // private rootEntry: FileEntry;
    // private checkOriginFile(): File;
    get(): FileAlterationObserver;
    setFileFilter(arg0: (param0: File) => boolean): FileAlterationObserver$Builder;
    setIOCase(arg0: IOCase): FileAlterationObserver$Builder;
    setRootEntry(arg0: FileEntry): FileAlterationObserver$Builder;
}