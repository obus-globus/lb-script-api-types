import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { TimeMark } from '../../kotlin/time/TimeMark.d.ts'
export class AdjustedTimeMark extends Object implements TimeMark {
    protected constructor()
    // private adjustment: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getAdjustment-UwyO8pc(): Duration;
    readonly mark: TimeMark;
    elapsedNow(): Duration;
    hasNotPassedNow(): boolean;
    hasPassedNow(): boolean;
    minus(duration: Duration): TimeMark;
    plus(duration: Duration): TimeMark;
}