import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GzipParameters$OS extends Enum<GzipParameters$OS> {
    static ACORN_RISCOS: GzipParameters$OS;
    static AMIGA: GzipParameters$OS;
    static ATARI_TOS: GzipParameters$OS;
    static CPM: GzipParameters$OS;
    static FAT: GzipParameters$OS;
    static HPFS: GzipParameters$OS;
    static MACINTOSH: GzipParameters$OS;
    static NTFS: GzipParameters$OS;
    static QDOS: GzipParameters$OS;
    static TOPS_20: GzipParameters$OS;
    static UNIX: GzipParameters$OS;
    static UNKNOWN: GzipParameters$OS;
    static VMS: GzipParameters$OS;
    static VM_CMS: GzipParameters$OS;
    static Z_SYSTEM: GzipParameters$OS;
    static from(paramarg0: number): GzipParameters$OS;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GzipParameters$OS;
    static values(): GzipParameters$OS[];
    private constructor(arg2: number)
    // private type: number;
    type(): number;
    name(): "ACORN_RISCOS" | "AMIGA" | "ATARI_TOS" | "CPM" | "FAT" | "HPFS" | "MACINTOSH" | "NTFS" | "QDOS" | "TOPS_20" | "UNIX" | "UNKNOWN" | "VM_CMS" | "VMS" | "Z_SYSTEM";
}