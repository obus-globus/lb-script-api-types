import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { MemoryUsage } from '../../../../java/lang/management/MemoryUsage.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CudaUtils extends Object {
    static getComputeCapability(paramarg0: number): string;
    static getCudaVersion(): number;
    static getCudaVersionString(): string;
    static getGpuCount(): number;
    static getGpuMemory(paramarg0: Device): MemoryUsage;
    static hasCuda(): boolean;
    static main(paramarg0: string[]): void;
    private constructor()
}