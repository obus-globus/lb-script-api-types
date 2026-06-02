import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { ObservableInputStream$Observer } from '../../../../../org/apache/commons/io/input/ObservableInputStream$Observer.d.ts'
export class TimestampedObserver extends ObservableInputStream$Observer {
    constructor()
    readonly closeInstant: Instant;
    readonly openInstant: Instant;
    closed(): void;
    getCloseInstant(): Instant;
    getOpenInstant(): Instant;
    getOpenToCloseDuration(): Duration;
    getOpenToNowDuration(): Duration;
    isClosed(): boolean;
    toString(): string;
}