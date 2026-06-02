import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Temporal } from '../../../../../java/time/temporal/Temporal.d.ts'
import type { TemporalUnit } from '../../../../../java/time/temporal/TemporalUnit.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FailableBiConsumer } from '../../../../../org/apache/commons/lang3/function/FailableBiConsumer.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableRunnable } from '../../../../../org/apache/commons/lang3/function/FailableRunnable.d.ts'
export class DurationUtils extends Object {
    static accept(paramarg0: (param0: number, param1: number) => void, paramarg1: Duration): void;
    static get(paramarg0: string, paramarg1: TemporalUnit, paramarg2: number): Duration;
    static getMillis(paramarg0: string, paramarg1: number): Duration;
    static getNanosOfMiili(paramarg0: Duration): number;
    static getNanosOfMilli(paramarg0: Duration): number;
    static getSeconds(paramarg0: string, paramarg1: number): Duration;
    static isPositive(paramarg0: Duration): boolean;
    static of(paramarg0: (param0: Instant) => void): Duration;
    static of(paramarg0: () => void): Duration;
    static since(paramarg0: Temporal): Duration;
    static toDuration(paramarg0: number, paramarg1: TimeUnit): Duration;
    static toMillisInt(paramarg0: Duration): number;
    static zeroIfNull(paramarg0: Duration): Duration;
    constructor()
}