import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { RegistrySetBuilder$RegisteredValue } from '../../../net/minecraft/core/RegistrySetBuilder$RegisteredValue.d.ts'
export class RegistrySetBuilder$ValueAndHolder<T extends unknown> extends Record {
    private constructor(value: RegistrySetBuilder$RegisteredValue<T>, holder: Optional<Holder$Reference<T>>)
    // private holder: Optional<Holder$Reference<T>>;
    // private value: RegistrySetBuilder$RegisteredValue<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    holder(): Optional<Holder$Reference<T>>;
    toString(): string;
    value(): RegistrySetBuilder$RegisteredValue<T>;
}