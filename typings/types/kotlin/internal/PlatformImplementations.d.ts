import type { JavaMap } from '../../JavaMap.d.ts'
import type { MatchResult } from '../../java/util/regex/MatchResult.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { MatchGroup } from '../../kotlin/text/MatchGroup.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
export class PlatformImplementations extends Object {
    constructor()
    addSuppressed(cause: Throwable, exception: Throwable): void;
    computeIfAbsent<V extends unknown, K extends unknown, NewV extends V>(map: JavaMap<K, V>, key: K, newValue: NewV): V;
    defaultPlatformRandom(): Random;
    getMatchResultNamedGroup(matchResult: MatchResult, name: string): MatchGroup | null;
    getOrDefault<V extends unknown, K extends unknown>(map: JavaMap<K, V>, key: K, default_: V): V | null;
    getSuppressed(exception: Throwable): Throwable[];
    getSystemClock(): Clock;
}