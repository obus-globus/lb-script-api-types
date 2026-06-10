import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChatFormatting } from '../../../../../../net/minecraft/ChatFormatting.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Attribute$Sentiment } from '../../../../../../net/minecraft/world/entity/ai/attributes/Attribute$Sentiment.d.ts'
export class Attribute extends Object {
    static CODEC: Codec<Holder<Attribute>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<Attribute>>;
    constructor(descriptionId: string, defaultValue: number)
    readonly defaultValue: number;
    readonly descriptionId: string;
    // private sentiment: Attribute$Sentiment;
    // private syncable: boolean;
    getDefaultValue(): number;
    getDescriptionId(): string;
    getStyle(valueIncrease: boolean): ChatFormatting;
    isClientSyncable(): boolean;
    sanitizeValue(value: number): number;
    setSentiment(sentiment: Attribute$Sentiment): Attribute;
    setSyncable(syncable: boolean): Attribute;
}