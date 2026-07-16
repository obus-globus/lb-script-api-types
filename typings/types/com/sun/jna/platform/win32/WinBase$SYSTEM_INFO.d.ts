import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { BaseTSD$DWORD_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$DWORD_PTR.d.ts'
import type { WinBase$SYSTEM_INFO$UNION } from '../../../../../com/sun/jna/platform/win32/WinBase$SYSTEM_INFO$UNION.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$WORD } from '../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinBase$SYSTEM_INFO extends Structure {
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
    constructor()
    dwActiveProcessorMask: BaseTSD$DWORD_PTR;
    dwAllocationGranularity: WinDef$DWORD;
    dwNumberOfProcessors: WinDef$DWORD;
    dwPageSize: WinDef$DWORD;
    dwProcessorType: WinDef$DWORD;
    lpMaximumApplicationAddress: Pointer;
    lpMinimumApplicationAddress: Pointer;
    processorArchitecture: WinBase$SYSTEM_INFO$UNION;
    wProcessorLevel: WinDef$WORD;
    wProcessorRevision: WinDef$WORD;
}