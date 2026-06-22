import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { LongSupplier } from '../../../java/util/function/LongSupplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TimeSource } from '../../../net/minecraft/util/TimeSource.d.ts'
export interface TimeSource$NanoTimeSource extends LongSupplier, Object, TimeSource{
    get(timeUnit: TimeUnit): number;
    getAsLong(): number;
}