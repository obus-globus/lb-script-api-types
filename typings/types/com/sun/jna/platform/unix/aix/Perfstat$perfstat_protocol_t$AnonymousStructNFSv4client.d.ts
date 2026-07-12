import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Perfstat$perfstat_protocol_t$AnonymousStructNFSv4client extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    access: number;
    acl_read: number;
    acl_stat_l: number;
    acl_write: number;
    client_confirm: number;
    close: number;
    commit: number;
    create: number;
    delegreturn: number;
    finfo: number;
    getattr: number;
    link: number;
    lock: number;
    lock_test: number;
    lookup: number;
    mkdir: number;
    mknod: number;
    nullreq: number;
    open: number;
    open_confirm: number;
    open_downgrade: number;
    operations: number;
    pcl_read: number;
    pcl_stat: number;
    pcl_stat_l: number;
    pcl_write: number;
    read: number;
    readdir: number;
    readlink: number;
    release_lock: number;
    remove: number;
    rename: number;
    renew: number;
    replicate: number;
    rmdir: number;
    secinfo: number;
    set_clientid: number;
    setattr: number;
    statfs: number;
    symlink: number;
    unlock: number;
    write: number;
}