import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { LinuxLibc$Exit_status } from '../../../../oshi/jna/platform/linux/LinuxLibc$Exit_status.d.ts'
import type { LinuxLibc$Ut_Tv } from '../../../../oshi/jna/platform/linux/LinuxLibc$Ut_Tv.d.ts'
export class LinuxLibc$LinuxUtmpx extends Structure {
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