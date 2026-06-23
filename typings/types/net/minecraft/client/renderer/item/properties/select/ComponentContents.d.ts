import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty.d.ts'
import type { SelectItemModelProperty$Type } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty$Type.d.ts'
import type { DataComponentType } from '../../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ComponentContents<T extends unknown> extends Record implements SelectItemModelProperty<T> {
    static castType(): SelectItemModelProperty$Type<ComponentContents<Object>, Object>;
    constructor(componentType: DataComponentType<T>)
    // private componentType: DataComponentType<T>;
    componentType(): DataComponentType<T>;
    equals(o: Object | null): boolean;
    get(itemStack: ItemStack, level: ClientLevel, owner: LivingEntity, seed: number, displayContext: ItemDisplayContext): T;
    hashCode(): number;
    toString(): string;
    type(): SelectItemModelProperty$Type<ComponentContents<T>, T>;
    valueCodec(): Codec<T>;
}