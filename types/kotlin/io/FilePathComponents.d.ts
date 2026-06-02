import type { File } from '../../java/io/File.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FilePathComponents extends Object {
    constructor(root: File, segments: File[])
    /*not mapped: */ isRooted(): boolean;
    readonly root: File;
    readonly rootName: string;
    readonly segments: File[];
    readonly size: number;
    component1(): File;
    component2(): File[];
    copy(root: File, segments: File[]): FilePathComponents;
    equals(other: Object | null): boolean;
    hashCode(): number;
    subPath(beginIndex: number, endIndex: number): File;
    toString(): string;
}