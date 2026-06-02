import type { Object } from '../../java/lang/Object.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { InstantParseResult } from '../../kotlin/time/InstantParseResult.d.ts'
export class InstantParseResult$Success extends Object implements InstantParseResult {
    constructor(epochSeconds: number, nanosecondsOfSecond: number)
    readonly epochSeconds: number;
    readonly nanosecondsOfSecond: number;
    toInstant(): Instant;
    toInstantOrNull(): Instant | null;
}