import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class OptionalsKt extends Object {
    static asSequence<T extends unknown>(self: Optional<T>): Sequence<T>;
    static getOrDefault<T extends unknown>(self: Optional<T>, defaultValue: T): T;
    static getOrElse<T extends unknown>(self: Optional<T>, defaultValue: () => T): T;
    static getOrNull<T extends unknown>(self: Optional<T>): T | null;
    static toCollection<C extends T[], T extends unknown>(self: Optional<T>, destination: C): C;
    static toList<T extends unknown>(self: Optional<T>): T[];
    static toSet<T extends unknown>(self: Optional<T>): T[];
}