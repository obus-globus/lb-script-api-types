import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AttributeModifier$Operation } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
export class AttributeModifier extends Record {
    static CODEC: Codec<AttributeModifier>;
    static MAP_CODEC: MapCodec<AttributeModifier>;
    static STREAM_CODEC: StreamCodec<ByteBuf, AttributeModifier>;
    // private amount: number;
    // private id: Identifier;
    // private operation: AttributeModifier$Operation;
    amount(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    is(id: Identifier): boolean;
    operation(): AttributeModifier$Operation;
    toString(): string;
}