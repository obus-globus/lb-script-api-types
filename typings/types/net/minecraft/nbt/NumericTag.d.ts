import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { PrimitiveTag } from '../../../net/minecraft/nbt/PrimitiveTag.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export interface NumericTag extends Object, PrimitiveTag{
    asBoolean(): Optional<boolean>;
    asByte(): Optional<number>;
    asDouble(): Optional<number>;
    asFloat(): Optional<number>;
    asInt(): Optional<number>;
    asLong(): Optional<number>;
    asNumber(): Optional<Number>;
    asShort(): Optional<number>;
    box(): Number;
    byteValue(): number;
    copy(): Tag;
    doubleValue(): number;
    floatValue(): number;
    intValue(): number;
    longValue(): number;
    shortValue(): number;
}