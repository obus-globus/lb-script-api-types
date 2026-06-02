import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CentralProcessor$ProcessorIdentifier extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: boolean)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: boolean, arg7: number)
    readonly cpu64bit: boolean;
    // private cpuFamily: string;
    // private cpuIdentifier: string;
    // private cpuModel: string;
    // private cpuName: string;
    // private cpuStepping: string;
    // private cpuVendor: string;
    // private cpuVendorFreq: number;
    // private microArchictecture: () => string;
    readonly processorID: string;
    getFamily(): string;
    getIdentifier(): string;
    getMicroarchitecture(): string;
    getModel(): string;
    getName(): string;
    getProcessorID(): string;
    getStepping(): string;
    getVendor(): string;
    getVendorFreq(): number;
    isCpu64bit(): boolean;
    // private queryMicroarchitecture(): string;
    // private queryVendorFromImplementer(arg0: string): string;
    toString(): string;
}