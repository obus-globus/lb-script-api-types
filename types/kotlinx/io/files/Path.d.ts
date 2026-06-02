import type { File } from '../../../java/io/File.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Path extends Object {
    constructor(file: File)
    // private file: File;
    /*not mapped: */ getFile$kotlinx_io_core(): File;
    /*not mapped: */ isAbsolute(): boolean;
    readonly name: string;
    readonly parent: Path | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}