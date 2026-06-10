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
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
export class ContextDimension extends Record implements SelectItemModelProperty<ResourceKey<Level>> {
    static TYPE: SelectItemModelProperty$Type<ContextDimension, ResourceKey<Level>>;
    static VALUE_CODEC: Codec<ResourceKey<Level>>;
    constructor()
    equals(o: Object | null): boolean;
    get(itemStack: ItemStack, level: ClientLevel, owner: LivingEntity, seed: number, displayContext: ItemDisplayContext): ResourceKey<Level>;
    hashCode(): number;
    toString(): string;
    type(): SelectItemModelProperty$Type<ContextDimension, ResourceKey<Level>>;
    valueCodec(): Codec<ResourceKey<Level>>;
}