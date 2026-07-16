import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinBase$FILETIME } from '../../../../../com/sun/jna/platform/win32/WinBase$FILETIME.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinBase$WIN32_FIND_DATA extends Structure {
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
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    static sizeOf(): number;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: number, arg1: WinBase$FILETIME, arg2: WinBase$FILETIME, arg3: WinBase$FILETIME, arg4: number, arg5: number, arg6: number, arg7: number, arg8: string[], arg9: string[])
    cAlternateFileName: string[];
    cFileName: string[];
    dwFileAttributes: number;
    dwReserved0: number;
    dwReserved1: number;
    ftCreationTime: WinBase$FILETIME;
    ftLastAccessTime: WinBase$FILETIME;
    ftLastWriteTime: WinBase$FILETIME;
    nFileSizeHigh: number;
    nFileSizeLow: number;
    getAlternateFileName(): string;
    getFileName(): string;
}