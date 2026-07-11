import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$INT_PTR } from '../../../../../com/sun/jna/platform/win32/WinDef$INT_PTR.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Winspool$PRINTER_INFO_2 extends Structure {
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
    constructor(arg0: number)
    Attributes: number;
    AveragePPM: number;
    DefaultPriority: number;
    Priority: number;
    StartTime: number;
    Status: number;
    UntilTime: number;
    cJobs: number;
    pComment: string;
    pDatatype: string;
    pDevMode: WinDef$INT_PTR;
    pDriverName: string;
    pLocation: string;
    pParameters: string;
    pPortName: string;
    pPrintProcessor: string;
    pPrinterName: string;
    pSecurityDescriptor: WinDef$INT_PTR;
    pSepFile: string;
    pServerName: string;
    pShareName: string;
    hasAttribute(arg0: number): boolean;
}