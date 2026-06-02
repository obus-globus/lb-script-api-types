import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export interface Delayed extends Object, Comparable<Delayed>{
    getDelay(arg0: TimeUnit): number;
}