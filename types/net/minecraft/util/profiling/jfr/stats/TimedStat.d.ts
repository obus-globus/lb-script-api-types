import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TimedStat extends Object{
    duration(): Duration;
}