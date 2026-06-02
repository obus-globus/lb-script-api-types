import type { Object } from '../../java/lang/Object.d.ts'
export class PhysicalMemory extends Object {
    constructor(arg0: string, arg1: number, arg2: number, arg3: string, arg4: string, arg5: string, arg6: string)
    readonly bankLabel: string;
    readonly capacity: number;
    readonly clockSpeed: number;
    readonly manufacturer: string;
    readonly memoryType: string;
    readonly partNumber: string;
    readonly serialNumber: string;
    getBankLabel(): string;
    getCapacity(): number;
    getClockSpeed(): number;
    getManufacturer(): string;
    getMemoryType(): string;
    getPartNumber(): string;
    getSerialNumber(): string;
    toString(): string;
}