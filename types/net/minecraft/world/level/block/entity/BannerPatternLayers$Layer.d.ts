import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BannerPattern } from '../../../../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
export class BannerPatternLayers$Layer extends Record {
    static CODEC: Codec<BannerPatternLayers$Layer>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BannerPatternLayers$Layer>;
    constructor(pattern: Holder<BannerPattern>, color: DyeColor)
    // private color: DyeColor;
    // private pattern: Holder<BannerPattern>;
    color(): DyeColor;
    description(): MutableComponent;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pattern(): Holder<BannerPattern>;
    toString(): string;
}