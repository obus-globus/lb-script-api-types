import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
export interface TimeMark extends Object{
    elapsedNow(): Duration;
    hasNotPassedNow(): boolean;
    hasPassedNow(): boolean;
    minus(duration: Duration): TimeMark;
    plus(duration: Duration): TimeMark;
}