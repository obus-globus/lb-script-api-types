import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SerializableFileTime } from '../../../../../org/apache/commons/io/monitor/SerializableFileTime.d.ts'
export class FileEntry extends Object implements Serializable {
    constructor(arg0: File)
    constructor(arg0: FileEntry, arg1: File)
    readonly children: FileEntry[];
    readonly directory: boolean;
    readonly exists: boolean;
    readonly file: File;
    readonly lastModified: SerializableFileTime;
    readonly length: number;
    readonly name: string;
    readonly parent: FileEntry;
    getChildren(): FileEntry[];
    getFile(): File;
    getLastModified(): number;
    getLastModifiedFileTime(): FileTime;
    getLength(): number;
    getLevel(): number;
    getName(): string;
    getParent(): FileEntry;
    isDirectory(): boolean;
    isExists(): boolean;
    newChildInstance(arg0: File): FileEntry;
    refresh(arg0: File): boolean;
    setChildren(...arg0: FileEntry[]): void;
    setDirectory(arg0: boolean): void;
    setExists(arg0: boolean): void;
    setLastModified(arg0: FileTime): void;
    setLastModified(arg0: number): void;
    setLastModified(arg0: SerializableFileTime): void;
    setLength(arg0: number): void;
    setName(arg0: string): void;
}