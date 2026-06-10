import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Perfstat$perfstat_protocol_t$AnonymousStructNFSv4server extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    access: number;
    clientid_confirm: number;
    close: number;
    commit: number;
    compound: number;
    create: number;
    delegpurge: number;
    delegreturn: number;
    getattr: number;
    getfh: number;
    link: number;
    lock: number;
    lockt: number;
    locku: number;
    lookup: number;
    lookupp: number;
    nullreq: number;
    nverify: number;
    open: number;
    open_confirm: number;
    open_downgrade: number;
    openattr: number;
    operations: number;
    putfh: number;
    putpubfh: number;
    putrootfh: number;
    read: number;
    readdir: number;
    readlink: number;
    release_lock: number;
    remove: number;
    rename: number;
    renew: number;
    restorefh: number;
    savefh: number;
    secinfo: number;
    set_clientid: number;
    setattr: number;
    verify: number;
    write: number;
}