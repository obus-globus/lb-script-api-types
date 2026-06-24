import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { OptionalLong } from '../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlQueryPool extends Object implements GpuQueryPool {
    constructor(size: number)
    // private closed: boolean;
    // private handles: number[];
    close(): void;
    getValue(index: number): OptionalLong;
    getValues(index: number, count: number): OptionalLong[];
    size(): number;
    writeTimestamp(index: number): void;
}