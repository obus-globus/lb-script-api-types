import type { Object } from '../../java/lang/Object.d.ts'
export interface GraphicsCard extends Object{
    getDeviceId(): string;
    getName(): string;
    getVRam(): number;
    getVendor(): string;
    getVersionInfo(): string;
}