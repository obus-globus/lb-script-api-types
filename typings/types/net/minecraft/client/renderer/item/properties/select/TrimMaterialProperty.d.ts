import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty.d.ts'
import type { SelectItemModelProperty$Type } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty$Type.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TrimMaterial } from '../../../../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
export class TrimMaterialProperty extends Record implements SelectItemModelProperty<ResourceKey<TrimMaterial>> {
    static TYPE: SelectItemModelProperty$Type<TrimMaterialProperty, ResourceKey<TrimMaterial>>;
    static VALUE_CODEC: Codec<ResourceKey<TrimMaterial>>;
    constructor()
    equals(o: Object | null): boolean;
    get(itemStack: ItemStack, level: ClientLevel, owner: LivingEntity, seed: number, displayContext: ItemDisplayContext): ResourceKey<TrimMaterial>;
    hashCode(): number;
    toString(): string;
    type(): SelectItemModelProperty$Type<TrimMaterialProperty, ResourceKey<TrimMaterial>>;
    valueCodec(): Codec<ResourceKey<TrimMaterial>>;
}