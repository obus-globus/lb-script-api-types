import type { Device } from '../../ai/djl/Device.d.ts'
import type { Engine } from '../../ai/djl/engine/Engine.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Device$MultiDevice extends Device {
    static cpu(): Device;
    static fromName(paramarg0: string): Device;
    static fromName(paramarg0: string, paramarg1: Engine): Device;
    static gpu(): Device;
    static gpu(paramarg0: number): Device;
    static of(paramarg0: string, paramarg1: number): Device;
    constructor(...arg0: Device[])
    constructor(arg0: string, arg1: number, arg2: number)
    constructor(arg0: Device[])
    devices: Device[];
    equals(arg0: Object | null): boolean;
    getDevices(): Device[];
    hashCode(): number;
    toString(): string;
}