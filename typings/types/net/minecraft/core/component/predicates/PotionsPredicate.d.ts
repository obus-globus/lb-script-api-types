import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Potion } from '../../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { PotionContents } from '../../../../../net/minecraft/world/item/alchemy/PotionContents.d.ts'
export class PotionsPredicate extends Record implements SingleComponentItemPredicate<PotionContents> {
    static CODEC: Codec<Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    static CODEC: Codec<PotionsPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    static potions(parampotions: Holder<Potion>[]): DataComponentPredicate;
    constructor(potions: Holder<Potion>[])
    // private potions: Holder<Potion>[];
    componentType(): DataComponentType<PotionContents>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(potionContents: PotionContents): boolean;
    potions(): Holder<Potion>[];
    toString(): string;
}