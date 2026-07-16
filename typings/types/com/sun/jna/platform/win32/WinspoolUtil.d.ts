import type { WinNT$HANDLEByReference } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLEByReference.d.ts'
import type { Winspool$JOB_INFO_1 } from '../../../../../com/sun/jna/platform/win32/Winspool$JOB_INFO_1.d.ts'
import type { Winspool$PRINTER_INFO_1 } from '../../../../../com/sun/jna/platform/win32/Winspool$PRINTER_INFO_1.d.ts'
import type { Winspool$PRINTER_INFO_2 } from '../../../../../com/sun/jna/platform/win32/Winspool$PRINTER_INFO_2.d.ts'
import type { Winspool$PRINTER_INFO_4 } from '../../../../../com/sun/jna/platform/win32/Winspool$PRINTER_INFO_4.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class WinspoolUtil extends Object {
    static getAllPrinterInfo2(): Winspool$PRINTER_INFO_2[];
    static getJobInfo1(paramarg0: WinNT$HANDLEByReference): Winspool$JOB_INFO_1[];
    static getPrinterInfo1(): Winspool$PRINTER_INFO_1[];
    static getPrinterInfo2(paramarg0: string): Winspool$PRINTER_INFO_2;
    static getPrinterInfo2(): Winspool$PRINTER_INFO_2[];
    static getPrinterInfo4(): Winspool$PRINTER_INFO_4[];
    constructor()
}