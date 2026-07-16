import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class SystemB$ProcTaskInfo extends Structure {
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
    pti_cow_faults: number;
    pti_csw: number;
    pti_faults: number;
    pti_messages_received: number;
    pti_messages_sent: number;
    pti_numrunning: number;
    pti_pageins: number;
    pti_policy: number;
    pti_priority: number;
    pti_resident_size: number;
    pti_syscalls_mach: number;
    pti_syscalls_unix: number;
    pti_threadnum: number;
    pti_threads_system: number;
    pti_threads_user: number;
    pti_total_system: number;
    pti_total_user: number;
    pti_virtual_size: number;
}