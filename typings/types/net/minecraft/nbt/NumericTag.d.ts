import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { PrimitiveTag } from '../../../net/minecraft/nbt/PrimitiveTag.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { TagVisitor } from '../../../net/minecraft/nbt/TagVisitor.d.ts'
export interface NumericTag extends Object, PrimitiveTag{
    accept(visitor: StreamTagVisitor): StreamTagVisitor$ValueResult;
    accept(visitor: TagVisitor): void;
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
    getId(): number;
    intValue(): number;
    longValue(): number;
    shortValue(): number;
    sizeInBytes(): number;
    write(output: DataOutput): void;
}