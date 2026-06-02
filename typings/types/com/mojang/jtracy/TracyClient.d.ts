import type { ContinuousFrame } from '../../../com/mojang/jtracy/ContinuousFrame.d.ts'
import type { DiscontinuousFrame } from '../../../com/mojang/jtracy/DiscontinuousFrame.d.ts'
import type { GpuApi } from '../../../com/mojang/jtracy/GpuApi.d.ts'
import type { GpuContext } from '../../../com/mojang/jtracy/GpuContext.d.ts'
import type { MemoryPool } from '../../../com/mojang/jtracy/MemoryPool.d.ts'
import type { Plot } from '../../../com/mojang/jtracy/Plot.d.ts'
import type { Zone } from '../../../com/mojang/jtracy/Zone.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TracyClient extends Object {
    static beginZone(paramarg0: string, paramarg1: boolean): Zone;
    static beginZone(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: number): Zone;
    static createContinuousFrame(paramarg0: string): ContinuousFrame;
    static createDiscontinuousFrame(paramarg0: string): DiscontinuousFrame;
    static createGpuContext(paramarg0: GpuApi, paramarg1: number, paramarg2: number): GpuContext;
    static createMemoryPool(paramarg0: string): MemoryPool;
    static createPlot(paramarg0: string): Plot;
    static frameImage(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: boolean): void;
    static isAvailable(): boolean;
    static load(): void;
    static markFrame(): void;
    static message(paramarg0: string): void;
    static message(paramarg0: string, paramarg1: number): void;
    static message(paramarg0: () => string): void;
    static message(paramarg0: () => string, paramarg1: number): void;
    static reportAppInfo(paramarg0: string): void;
    static setThreadName(paramarg0: string, paramarg1: number): void;
    constructor()
}