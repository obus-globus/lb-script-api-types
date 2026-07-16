import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { Ntifs$GenericReparseBuffer } from '../../../../../com/sun/jna/platform/win32/Ntifs$GenericReparseBuffer.d.ts'
import type { Ntifs$MountPointReparseBuffer } from '../../../../../com/sun/jna/platform/win32/Ntifs$MountPointReparseBuffer.d.ts'
import type { Ntifs$SymbolicLinkReparseBuffer } from '../../../../../com/sun/jna/platform/win32/Ntifs$SymbolicLinkReparseBuffer.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class Ntifs$REPARSE_DATA_BUFFER$REPARSE_UNION extends Union {
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
    constructor(arg0: Pointer)
    genericReparseBuffer: Ntifs$GenericReparseBuffer;
    mountPointReparseBuffer: Ntifs$MountPointReparseBuffer;
    symLinkReparseBuffer: Ntifs$SymbolicLinkReparseBuffer;
}