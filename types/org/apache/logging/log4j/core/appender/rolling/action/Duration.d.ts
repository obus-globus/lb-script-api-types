import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
export class Duration extends Object implements Serializable, Comparable<Duration> {
    static ZERO: Duration;
    static ofMillis(parammillis: number): Duration;
    static parse(paramtext: CharSequence): Duration;
    private constructor(seconds: number)
    // private seconds: number;
    compareTo(other: Duration): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toMillis(): number;
    toString(): string;
}