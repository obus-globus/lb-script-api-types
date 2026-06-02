import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { IOAccess } from '../../../../org/graalvm/polyglot/io/IOAccess.d.ts'
export class IOAccess$Builder extends Object {
    constructor()
    constructor(prototype: IOAccess)
    // private allowHostFileAccess: boolean;
    // private allowHostSocketAccess: boolean;
    // private customFileSystem: FileSystem;
    // private name: string;
    allowHostFileAccess(allow: boolean): IOAccess$Builder;
    allowHostSocketAccess(allow: boolean): IOAccess$Builder;
    build(): IOAccess;
    fileSystem(fileSystem: FileSystem): IOAccess$Builder;
    name(givenName: string): IOAccess$Builder;
}