import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { FreeBsdLibc$Timeval } from '../../../../oshi/jna/platform/unix/FreeBsdLibc$Timeval.d.ts'
export class FreeBsdLibc$FreeBsdUtmpx extends Structure {
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
    ut_host: number[];
    ut_id: number[];
    ut_line: number[];
    ut_pid: number;
    ut_spare: number[];
    ut_tv: FreeBsdLibc$Timeval;
    ut_type: number;
    ut_user: number[];
}