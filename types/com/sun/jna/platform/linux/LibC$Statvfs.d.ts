import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LibC$Statvfs extends Structure {
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
    _f_spare: number[];
    _f_unused: number;
    f_bavail: NativeLong;
    f_bfree: NativeLong;
    f_blocks: NativeLong;
    f_bsize: NativeLong;
    f_favail: NativeLong;
    f_ffree: NativeLong;
    f_files: NativeLong;
    f_flag: NativeLong;
    f_frsize: NativeLong;
    f_fsid: NativeLong;
    f_namemax: NativeLong;
    getFieldList(): Field[];
    getFieldOrder(): string[];
}