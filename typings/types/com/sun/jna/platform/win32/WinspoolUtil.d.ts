import type { WinNT$HANDLEByReference } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLEByReference.d.ts'
import type { Winspool$PRINTER_INFO_2 } from '../../../../../com/sun/jna/platform/win32/Winspool$PRINTER_INFO_2.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class WinspoolUtil extends Object {
    static getAllPrinterInfo2(): (Object | null)[];
    static getJobInfo1(paramarg0: WinNT$HANDLEByReference): (Object | null)[];
    static getPrinterInfo1(): (Object | null)[];
    static getPrinterInfo2(paramarg0: string): Winspool$PRINTER_INFO_2;
    static getPrinterInfo2(): (Object | null)[];
    static getPrinterInfo4(): (Object | null)[];
    constructor()
}