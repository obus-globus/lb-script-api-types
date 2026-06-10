import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Attribute } from '../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
export class ClientboundUpdateAttributesPacket$AttributeSnapshot extends Record {
    static MODIFIER_STREAM_CODEC: StreamCodec<ByteBuf, AttributeModifier>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateAttributesPacket$AttributeSnapshot>;
    // private attribute: Holder<Attribute>;
    // private base: number;
    // private modifiers: AttributeModifier[];
    attribute(): Holder<Attribute>;
    base(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modifiers(): AttributeModifier[];
    toString(): string;
}