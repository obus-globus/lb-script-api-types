import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Perfstat$perfstat_value_t } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_value_t.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Perfstat$perfstat_partition_config_t extends Structure {
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
    OSBuild: number[];
    OSName: number[];
    OSVersion: number[];
    activecpusinpool: number;
    conf: number;
    cpucap: Perfstat$perfstat_value_t;
    cpucap_weightage: number;
    cpupool_weightage: number;
    drives: number;
    entitled_proc_capacity: number;
    entpoolcap: number;
    exp_mem: Perfstat$perfstat_value_t;
    groupid: number;
    hyperpgsize: number;
    lcpus: number;
    machineID: number[];
    maxpoolcap: number;
    mem: Perfstat$perfstat_value_t;
    mem_weightage: number;
    mempoolid: number;
    nodename: number[];
    numProcessors: Perfstat$perfstat_value_t;
    nw_adapters: number;
    partitionname: number[];
    partitionnum: number;
    processorFamily: number[];
    processorMHz: number;
    processorModel: number[];
    processor_poolid: number;
    sharedpcpu: number;
    smtthreads: number;
    targetmemexpfactor: number;
    targetmemexpsize: number;
    totiomement: number;
    vcpus: Perfstat$perfstat_value_t;
    version: number;
}