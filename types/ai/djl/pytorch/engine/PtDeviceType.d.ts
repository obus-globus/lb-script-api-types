import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PtDeviceType extends Object {
    static fromDeviceType(paramarg0: number): string;
    static toDeviceType(paramarg0: Device): number;
    private constructor()
}