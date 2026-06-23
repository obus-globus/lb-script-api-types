import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RegistrySetBuilder$RegisteredValue<T extends unknown> extends Record {
    private constructor(value: T, lifecycle: Lifecycle)
    // private lifecycle: Lifecycle;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lifecycle(): Lifecycle;
    toString(): string;
    value(): T;
}