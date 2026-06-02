import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinBase$DCB$DCBControllBits } from '../../../../../com/sun/jna/platform/win32/WinBase$DCB$DCBControllBits.d.ts'
import type { WinDef$BYTE } from '../../../../../com/sun/jna/platform/win32/WinDef$BYTE.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$WORD } from '../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinBase$DCB extends Structure {
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
    constructor()
    BaudRate: WinDef$DWORD;
    ByteSize: WinDef$BYTE;
    DCBlength: WinDef$DWORD;
    EofChar: string;
    ErrorChar: string;
    EvtChar: string;
    Parity: WinDef$BYTE;
    StopBits: WinDef$BYTE;
    XoffChar: string;
    XoffLim: WinDef$WORD;
    XonChar: string;
    XonLim: WinDef$WORD;
    controllBits: WinBase$DCB$DCBControllBits;
    wReserved: WinDef$WORD;
    wReserved1: WinDef$WORD;
}