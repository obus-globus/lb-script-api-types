import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { TagType } from '../../../net/minecraft/nbt/TagType.d.ts'
import type { TagVisitor } from '../../../net/minecraft/nbt/TagVisitor.d.ts'
export interface Tag extends Object{
    accept(visitor: StreamTagVisitor): StreamTagVisitor$ValueResult;
    accept(visitor: TagVisitor): void;
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
    getId(): number;
    getType(): TagType<any>;
    sizeInBytes(): number;
    write(output: DataOutput): void;
}