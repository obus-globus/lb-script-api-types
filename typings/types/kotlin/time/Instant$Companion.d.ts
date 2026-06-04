import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
export class Instant$Companion extends Object {
    readonly DISTANT_FUTURE: Instant;
    readonly DISTANT_PAST: Instant;
    // private MAX: Instant;
    /*not mapped: */ getMAX$kotlin_stdlib(): Instant;
    // private MIN: Instant;
    /*not mapped: */ getMIN$kotlin_stdlib(): Instant;
    fromEpochMilliseconds(epochMilliseconds: number): Instant;
    fromEpochSeconds(epochSeconds: number, nanosecondAdjustment: number): Instant;
    now(): Instant;
    parse(input: CharSequence): Instant;
    parseOrNull(input: CharSequence): Instant | null;
}