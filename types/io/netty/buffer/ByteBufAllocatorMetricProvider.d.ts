import type { ByteBufAllocatorMetric } from '../../../io/netty/buffer/ByteBufAllocatorMetric.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ByteBufAllocatorMetricProvider extends Object{
    metric(): ByteBufAllocatorMetric;
}