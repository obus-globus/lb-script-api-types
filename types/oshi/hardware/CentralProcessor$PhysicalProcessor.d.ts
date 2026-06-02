import type { Object } from '../../java/lang/Object.d.ts'
export class CentralProcessor$PhysicalProcessor extends Object {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: string)
    readonly efficiency: number;
    readonly idString: string;
    readonly physicalPackageNumber: number;
    readonly physicalProcessorNumber: number;
    getEfficiency(): number;
    getIdString(): string;
    getPhysicalPackageNumber(): number;
    getPhysicalProcessorNumber(): number;
    toString(): string;
}