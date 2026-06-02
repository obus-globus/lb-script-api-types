import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { InstantParseResult } from '../../kotlin/time/InstantParseResult.d.ts'
export class InstantParseResult$Failure extends Object implements InstantParseResult {
    constructor(error: string, input: CharSequence)
    readonly error: string;
    readonly input: CharSequence;
    toInstant(): Instant;
    toInstantOrNull(): Instant | null;
}