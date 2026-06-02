import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { Instant$Companion } from '../../kotlin/time/Instant$Companion.d.ts'
export class Instant extends Object implements Serializable, Comparable<Instant> {
    static Companion: Instant$Companion;
    constructor(epochSeconds: number, nanosecondsOfSecond: number)
    readonly epochSeconds: number;
    readonly nanosecondsOfSecond: number;
    compareTo(other: Instant): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    minus(duration: Duration): Instant;
    minus(other: Instant): Duration;
    plus(duration: Duration): Instant;
    // private readObject(input: ObjectInputStream): void;
    toEpochMilliseconds(): number;
    toString(): string;
    // private writeReplace(): Object;
}