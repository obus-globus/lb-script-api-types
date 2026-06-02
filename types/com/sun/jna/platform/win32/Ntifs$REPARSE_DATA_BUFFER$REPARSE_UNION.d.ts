import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { Ntifs$GenericReparseBuffer } from '../../../../../com/sun/jna/platform/win32/Ntifs$GenericReparseBuffer.d.ts'
import type { Ntifs$MountPointReparseBuffer } from '../../../../../com/sun/jna/platform/win32/Ntifs$MountPointReparseBuffer.d.ts'
import type { Ntifs$SymbolicLinkReparseBuffer } from '../../../../../com/sun/jna/platform/win32/Ntifs$SymbolicLinkReparseBuffer.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Ntifs$REPARSE_DATA_BUFFER$REPARSE_UNION extends Union {
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
    constructor(arg0: Pointer)
    genericReparseBuffer: Ntifs$GenericReparseBuffer;
    mountPointReparseBuffer: Ntifs$MountPointReparseBuffer;
    symLinkReparseBuffer: Ntifs$SymbolicLinkReparseBuffer;
}