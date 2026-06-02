import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ConditionalItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/conditional/ConditionalItemModelProperty.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FishingRodCast extends Record implements ConditionalItemModelProperty {
    static MAP_CODEC: MapCodec<FishingRodCast>;
    constructor()
    equals(o: Object | null): boolean;
    get(itemStack: ItemStack, level: ClientLevel, owner: LivingEntity, seed: number, displayContext: ItemDisplayContext): boolean;
    hashCode(): number;
    toString(): string;
    type(): MapCodec<FishingRodCast>;
}