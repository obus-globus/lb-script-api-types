import type { MatchResult } from '../../java/util/regex/MatchResult.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { MatchGroup } from '../../kotlin/text/MatchGroup.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
export class PlatformImplementations extends Object {
    constructor()
    addSuppressed(cause: Throwable, exception: Throwable): void;
    defaultPlatformRandom(): Random;
    getMatchResultNamedGroup(matchResult: MatchResult, name: string): MatchGroup | null;
    getSuppressed(exception: Throwable): Throwable[];
    getSystemClock(): Clock;
}