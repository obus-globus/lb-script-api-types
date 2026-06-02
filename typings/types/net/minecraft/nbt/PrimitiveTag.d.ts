import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export interface PrimitiveTag extends Object, Tag{
    acceptAsRoot(output: StreamTagVisitor): void;
    asBoolean(): Optional<boolean>;
    asByte(): Optional<number>;
    asByteArray(): Optional<number[]>;
    asCompound(): Optional<CompoundTag>;
    asDouble(): Optional<number>;
    asFloat(): Optional<number>;
    asInt(): Optional<number>;
    asIntArray(): Optional<number[]>;
    asList(): Optional<(Object | null)[]>;
    asLong(): Optional<number>;
    asLongArray(): Optional<number[]>;
    asNumber(): Optional<Number>;
    asShort(): Optional<number>;
    asString(): Optional<string>;
    copy(): Tag;
}