import type { File } from '../../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../../java/io/FileFilter.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOCase } from '../../../../../org/apache/commons/io/IOCase.d.ts'
import type { FileAlterationListener } from '../../../../../org/apache/commons/io/monitor/FileAlterationListener.d.ts'
import type { FileAlterationObserver$Builder } from '../../../../../org/apache/commons/io/monitor/FileAlterationObserver$Builder.d.ts'
import type { FileEntry } from '../../../../../org/apache/commons/io/monitor/FileEntry.d.ts'
export class FileAlterationObserver extends Object implements Serializable {
    static builder(): FileAlterationObserver$Builder;
    constructor(arg0: File)
    constructor(arg0: File, arg1: (param0: File) => boolean)
    constructor(arg0: File, arg1: (param0: File) => boolean, arg2: IOCase)
    constructor(arg0: string)
    constructor(arg0: string, arg1: (param0: File) => boolean)
    constructor(arg0: string, arg1: (param0: File) => boolean, arg2: IOCase)
    constructor(arg0: FileAlterationObserver$Builder, arg1: any)
    constructor(arg0: FileEntry, arg1: (param0: File) => boolean, arg2: IOCase)
    // private comparator: (param0: File, param1: File) => number;
    readonly fileFilter: (param0: File) => boolean;
    readonly listeners: FileAlterationListener[];
    // private rootEntry: FileEntry;
    addListener(arg0: FileAlterationListener): void;
    // private checkAndFire(arg0: FileEntry, arg1: FileEntry[], arg2: File[]): void;
    checkAndNotify(): void;
    // private createFileEntry(arg0: FileEntry, arg1: File): FileEntry;
    destroy(): void;
    // private fireOnChange(arg0: FileEntry, arg1: File): void;
    // private fireOnCreate(arg0: FileEntry): void;
    // private fireOnDelete(arg0: FileEntry): void;
    getComparator(): (param0: File, param1: File) => number;
    getDirectory(): File;
    getFileFilter(): (param0: File) => boolean;
    getListeners(): FileAlterationListener[];
    initialize(): void;
    // private listFileEntries(arg0: File, arg1: FileEntry): FileEntry[];
    // private listFiles(arg0: File): File[];
    removeListener(arg0: FileAlterationListener): void;
    // private sort(arg0: File[]): File[];
    toString(): string;
}