import type { Object } from '../../java/lang/Object.d.ts'
export class CentralProcessor$LogicalProcessor extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    readonly numaNode: number;
    readonly physicalPackageNumber: number;
    readonly physicalProcessorNumber: number;
    readonly processorGroup: number;
    readonly processorNumber: number;
    getNumaNode(): number;
    getPhysicalPackageNumber(): number;
    getPhysicalProcessorNumber(): number;
    getProcessorGroup(): number;
    getProcessorNumber(): number;
    toString(): string;
}