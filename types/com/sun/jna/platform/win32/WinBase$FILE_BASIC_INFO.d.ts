import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinBase$FILETIME } from '../../../../../com/sun/jna/platform/win32/WinBase$FILETIME.d.ts'
import type { WinNT$LARGE_INTEGER } from '../../../../../com/sun/jna/platform/win32/WinNT$LARGE_INTEGER.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinBase$FILE_BASIC_INFO extends Structure {
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
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    static sizeOf(): number;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: WinBase$FILETIME, arg1: WinBase$FILETIME, arg2: WinBase$FILETIME, arg3: WinBase$FILETIME, arg4: number)
    constructor(arg0: WinNT$LARGE_INTEGER, arg1: WinNT$LARGE_INTEGER, arg2: WinNT$LARGE_INTEGER, arg3: WinNT$LARGE_INTEGER, arg4: number)
    ChangeTime: WinNT$LARGE_INTEGER;
    CreationTime: WinNT$LARGE_INTEGER;
    FileAttributes: number;
    LastAccessTime: WinNT$LARGE_INTEGER;
    LastWriteTime: WinNT$LARGE_INTEGER;
}