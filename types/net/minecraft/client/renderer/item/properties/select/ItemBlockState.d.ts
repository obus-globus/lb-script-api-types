import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { PrimitiveCodec } from '../../../../../../../com/mojang/serialization/codecs/PrimitiveCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty.d.ts'
import type { SelectItemModelProperty$Type } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty$Type.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemBlockState extends Record implements SelectItemModelProperty<string> {
    static TYPE: SelectItemModelProperty$Type<ItemBlockState, string>;
    static VALUE_CODEC: PrimitiveCodec<string>;
    constructor(property: string)
    // private property: string;
    equals(o: Object | null): boolean;
    get(itemStack: ItemStack, level: ClientLevel, owner: LivingEntity, seed: number, displayContext: ItemDisplayContext): string;
    hashCode(): number;
    property(): string;
    toString(): string;
    type(): SelectItemModelProperty$Type<ItemBlockState, string>;
    valueCodec(): Codec<string>;
}