import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinBase$SYSTEMTIME } from '../../../../../com/sun/jna/platform/win32/WinBase$SYSTEMTIME.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class Winspool$JOB_INFO_1 extends Structure {
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
    constructor()
    constructor(arg0: number)
    JobId: number;
    PagesPrinted: number;
    Position: number;
    Priority: number;
    Status: number;
    Submitted: WinBase$SYSTEMTIME;
    TotalPages: number;
    pDatatype: string;
    pDocument: string;
    pMachineName: string;
    pPrinterName: string;
    pStatus: string;
    pUserName: string;
}