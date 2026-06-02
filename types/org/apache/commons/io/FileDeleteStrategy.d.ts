import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FileDeleteStrategy extends Object {
    static FORCE: FileDeleteStrategy;
    static NORMAL: FileDeleteStrategy;
    constructor(arg0: string)
    // private name: string;
    delete(arg0: File): void;
    deleteQuietly(arg0: File): boolean;
    doDelete(arg0: File): boolean;
    toString(): string;
}