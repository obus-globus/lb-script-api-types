import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SelectItemModelProperty$Type } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty$Type.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface SelectItemModelProperty<T extends Object | number | string | boolean> extends Object{
    get(itemStack: ItemStack, level: ClientLevel, owner: LivingEntity, seed: number, displayContext: ItemDisplayContext): T;
    type(): SelectItemModelProperty$Type<SelectItemModelProperty<T>, T>;
    valueCodec(): Codec<T>;
}