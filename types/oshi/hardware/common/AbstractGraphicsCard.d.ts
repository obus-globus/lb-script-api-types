import type { Object } from '../../../java/lang/Object.d.ts'
import type { GraphicsCard } from '../../../oshi/hardware/GraphicsCard.d.ts'
export abstract class AbstractGraphicsCard extends Object implements GraphicsCard {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number)
    readonly deviceId: string;
    readonly name: string;
    readonly vendor: string;
    readonly versionInfo: string;
    // private vram: number;
    getDeviceId(): string;
    getName(): string;
    getVRam(): number;
    getVendor(): string;
    getVersionInfo(): string;
    toString(): string;
}