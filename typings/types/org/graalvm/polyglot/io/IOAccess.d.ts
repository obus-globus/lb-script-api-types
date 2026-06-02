import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { IOAccess$Builder } from '../../../../org/graalvm/polyglot/io/IOAccess$Builder.d.ts'
export class IOAccess extends Object {
    static ALL: IOAccess;
    static NONE: IOAccess;
    static newBuilder(): IOAccess$Builder;
    static newBuilder(paramprototype: IOAccess): IOAccess$Builder;
    constructor(name: string, allowHostFileAccess: boolean, allowHostSocketAccess: boolean, fileSystem: FileSystem)
    // private allowHostFileAccess: boolean;
    // private allowHostSocketAccess: boolean;
    // private fileSystem: FileSystem;
    // private name: string;
    equals(obj: Object | null): boolean;
    getFileSystem(): FileSystem;
    hasHostFileAccess(): boolean;
    hasHostSocketAccess(): boolean;
    hashCode(): number;
    toString(): string;
}