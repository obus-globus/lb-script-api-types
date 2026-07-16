import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
export class OpenBsdLibc$Bcachestats extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor(arg0: Pointer)
    busymapped: number;
    cachehits: number;
    delwribufs: number;
    dmaflips: number;
    dmapages: number;
    highflips: number;
    highflops: number;
    highpages: number;
    kvaslots: number;
    kvaslots_avail: number;
    numbufpages: number;
    numbufs: number;
    numcleanpages: number;
    numdirtypages: number;
    numreads: number;
    numwrites: number;
    pendingreads: number;
    pendingwrites: number;
}