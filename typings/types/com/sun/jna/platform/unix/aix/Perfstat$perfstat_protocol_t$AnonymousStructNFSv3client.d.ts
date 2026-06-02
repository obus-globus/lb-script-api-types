import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Perfstat$perfstat_protocol_t$AnonymousStructNFSv3client extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    constructor()
    access: number;
    calls: number;
    commit: number;
    create: number;
    fsinfo: number;
    fsstat: number;
    getattr: number;
    link: number;
    lookup: number;
    mkdir: number;
    mknod: number;
    nullreq: number;
    pathconf: number;
    read: number;
    readdir: number;
    readdirplus: number;
    readlink: number;
    remove: number;
    rename: number;
    rmdir: number;
    setattr: number;
    symlink: number;
    write: number;
}