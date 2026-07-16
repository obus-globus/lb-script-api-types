import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Perfstat$perfstat_value_t } from '../../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_value_t.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class Perfstat$perfstat_partition_config_t extends Structure {
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