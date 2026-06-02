import type { Object } from '../../java/lang/Object.d.ts'
import type { TimeMark } from '../../kotlin/time/TimeMark.d.ts'
export interface TimeSource extends Object{
    markNow(): TimeMark;
}