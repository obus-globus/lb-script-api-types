import type { Object } from '../../../java/lang/Object.d.ts'
import type { HWDiskStore } from '../../../oshi/hardware/HWDiskStore.d.ts'
export abstract class AbstractHWDiskStore extends Object implements HWDiskStore {
    constructor(arg0: string, arg1: string, arg2: string, arg3: number)
    readonly model: string;
    readonly name: string;
    readonly serial: string;
    readonly size: number;
    getModel(): string;
    getName(): string;
    getSerial(): string;
    getSize(): number;
    toString(): string;
}