import type { JavaMap } from '../../../JavaMap.d.ts'
import type { MatchResult } from '../../../java/util/regex/MatchResult.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { JDK7PlatformImplementations } from '../../../kotlin/internal/jdk7/JDK7PlatformImplementations.d.ts'
import type { Random } from '../../../kotlin/random/Random.d.ts'
import type { MatchGroup } from '../../../kotlin/text/MatchGroup.d.ts'
import type { Clock } from '../../../kotlin/time/Clock.d.ts'
export class JDK8PlatformImplementations extends JDK7PlatformImplementations {
    constructor()
    computeIfAbsent<V extends unknown, K extends unknown, NewV extends V>(map: JavaMap<K, V>, key: K, newValue: NewV): V;
    defaultPlatformRandom(): Random;
    getMatchResultNamedGroup(matchResult: MatchResult, name: string): MatchGroup | null;
    getOrDefault<V extends unknown, K extends unknown>(map: JavaMap<K, V>, key: K, default_: V): V | null;
    getSystemClock(): Clock;
    // private sdkIsNullOrAtLeast(version: number): boolean;
}