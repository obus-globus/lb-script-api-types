import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LinuxLibc$Exit_status } from '../../../../oshi/jna/platform/linux/LinuxLibc$Exit_status.d.ts'
import type { LinuxLibc$Ut_Tv } from '../../../../oshi/jna/platform/linux/LinuxLibc$Ut_Tv.d.ts'
export class LinuxLibc$LinuxUtmpx extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    reserved: number[];
    ut_addr_v6: number[];
    ut_exit: LinuxLibc$Exit_status;
    ut_host: number[];
    ut_id: number[];
    ut_line: number[];
    ut_pid: number;
    ut_session: number;
    ut_tv: LinuxLibc$Ut_Tv;
    ut_type: number;
    ut_user: number[];
}