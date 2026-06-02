import type { Object } from '../../java/lang/Object.d.ts'
import type { ComparableTimeMark } from '../../kotlin/time/ComparableTimeMark.d.ts'
import type { TimeSource } from '../../kotlin/time/TimeSource.d.ts'
export interface TimeSource$WithComparableMarks extends Object, TimeSource{
    markNow(): ComparableTimeMark;
}