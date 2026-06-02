import type { MatchResult } from '../../../java/util/regex/MatchResult.d.ts'
import type { JDK7PlatformImplementations } from '../../../kotlin/internal/jdk7/JDK7PlatformImplementations.d.ts'
import type { Random } from '../../../kotlin/random/Random.d.ts'
import type { MatchGroup } from '../../../kotlin/text/MatchGroup.d.ts'
import type { Clock } from '../../../kotlin/time/Clock.d.ts'
export class JDK8PlatformImplementations extends JDK7PlatformImplementations {
    constructor()
    defaultPlatformRandom(): Random;
    getMatchResultNamedGroup(matchResult: MatchResult, name: string): MatchGroup | null;
    getSystemClock(): Clock;
    // private sdkIsNullOrAtLeast(version: number): boolean;
}