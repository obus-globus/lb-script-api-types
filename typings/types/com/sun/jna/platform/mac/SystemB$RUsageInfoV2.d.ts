import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SystemB$RUsageInfoV2 extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    ri_child_elapsed_abstime: number;
    ri_child_interrupt_wkups: number;
    ri_child_pageins: number;
    ri_child_pkg_idle_wkups: number;
    ri_child_system_time: number;
    ri_child_user_time: number;
    ri_diskio_bytesread: number;
    ri_diskio_byteswritten: number;
    ri_interrupt_wkups: number;
    ri_pageins: number;
    ri_phys_footprint: number;
    ri_pkg_idle_wkups: number;
    ri_proc_exit_abstime: number;
    ri_proc_start_abstime: number;
    ri_resident_size: number;
    ri_system_time: number;
    ri_user_time: number;
    ri_uuid: number[];
    ri_wired_size: number;
}