import type { Object } from '../../../java/lang/Object.d.ts'
import type { ComparableTimeMark } from '../../../kotlin/time/ComparableTimeMark.d.ts'
export interface RealDnsCache$Result extends Object{
    readonly expireAt: ComparableTimeMark;
    readonly revalidateAt: ComparableTimeMark;
}