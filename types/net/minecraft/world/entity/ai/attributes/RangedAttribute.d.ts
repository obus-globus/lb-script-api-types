import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Attribute } from '../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
export class RangedAttribute extends Attribute {
    static CODEC: Codec<Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(descriptionId: string, defaultValue: number, minValue: number, maxValue: number)
    readonly maxValue: number;
    readonly minValue: number;
    getMaxValue(): number;
    getMinValue(): number;
    sanitizeValue(value: number): number;
}