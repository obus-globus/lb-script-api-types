import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { OptionalDouble } from '../../../../../java/util/OptionalDouble.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { OptionalLong } from '../../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
export class OptionalExtensionsKt extends Object {
    static optional(): Optional<Object>;
    static optional(paramarg0: Object | null): Optional<Object>;
    static optional(paramarg0: Function0<Object>): Optional<Object>;
    static optional(paramarg0: number): OptionalDouble;
    static optional(paramarg0: number): OptionalInt;
    static optional(paramarg0: number): OptionalLong;
}