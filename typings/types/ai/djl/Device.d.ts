import type { Device$1 } from '../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Engine } from '../../ai/djl/engine/Engine.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Device extends Object {
    static cpu(): Device;
    static fromName(paramarg0: string): Device;
    static fromName(paramarg0: string, paramarg1: Engine): Device;
    static gpu(): Device;
    static gpu(paramarg0: number): Device;
    static of(paramarg0: string, paramarg1: number): Device;
    private constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: Device$1)
    deviceId: number;
    deviceType: string;
    equals(arg0: Object | null): boolean;
    getDeviceId(): number;
    getDeviceType(): string;
    getDevices(): Device[];
    hashCode(): number;
    isGpu(): boolean;
    toString(): string;
}