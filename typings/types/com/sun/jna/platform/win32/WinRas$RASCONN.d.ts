import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { WinNT$LUID } from '../../../../../com/sun/jna/platform/win32/WinNT$LUID.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinRas$RASCONN extends Structure {
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
    constructor(arg0: Pointer)
    dwFlags: number;
    dwSize: number;
    dwSubEntry: number;
    guidCorrelationId: Guid$GUID;
    guidEntry: Guid$GUID;
    hrasconn: WinNT$HANDLE;
    luid: WinNT$LUID;
    szDeviceName: string[];
    szDeviceType: string[];
    szEntryName: string[];
    szPhonebook: string[];
}