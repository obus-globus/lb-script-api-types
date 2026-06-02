import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class RegistrySynchronization$PackedRegistryEntry extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, RegistrySynchronization$PackedRegistryEntry>;
    constructor(id: Identifier, data: Optional<Tag>)
    // private data: Optional<Tag>;
    // private id: Identifier;
    data(): Optional<Tag>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}