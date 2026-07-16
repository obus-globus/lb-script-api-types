import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { OptionalDouble } from '../../../../../java/util/OptionalDouble.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { OptionalLong } from '../../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OptionalExtensionsKt extends Object {
    static optional<T extends unknown>(): Optional<T>;
    static optional<T extends unknown>(value: T | null): Optional<T>;
    static optional<T extends unknown>(block: () => T | null): Optional<T>;
    static optional(value: number): OptionalDouble;
    static optional(value: number): OptionalInt;
    static optional(value: number): OptionalLong;
    static toNullable(self: OptionalDouble): number | null;
    static toNullable(self: OptionalInt): number | null;
    static toNullable(self: OptionalLong): number | null;
}