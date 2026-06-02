import type { GpuQuery } from '../../../../com/mojang/blaze3d/systems/GpuQuery.d.ts'
import type { OptionalLong } from '../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlTimerQuery extends Object implements GpuQuery {
    constructor(queryId: number)
    // private closed: boolean;
    // private queryId: number;
    // private result: OptionalLong;
    close(): void;
    getValue(): OptionalLong;
}