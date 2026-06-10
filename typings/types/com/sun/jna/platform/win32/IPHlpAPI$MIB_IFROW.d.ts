import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IPHlpAPI$MIB_IFROW extends Structure {
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
    bDescr: number[];
    bPhysAddr: number[];
    dwAdminStatus: number;
    dwDescrLen: number;
    dwInDiscards: number;
    dwInErrors: number;
    dwInNUcastPkts: number;
    dwInOctets: number;
    dwInUcastPkts: number;
    dwInUnknownProtos: number;
    dwIndex: number;
    dwLastChange: number;
    dwMtu: number;
    dwOperStatus: number;
    dwOutDiscards: number;
    dwOutErrors: number;
    dwOutNUcastPkts: number;
    dwOutOctets: number;
    dwOutQLen: number;
    dwOutUcastPkts: number;
    dwPhysAddrLen: number;
    dwSpeed: number;
    dwType: number;
    wszName: string[];
}