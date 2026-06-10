import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { ConditionalItemModelProperty } from '../../../../../net/minecraft/client/renderer/item/properties/conditional/ConditionalItemModelProperty.d.ts'
import type { ItemModelPropertyTest } from '../../../../../net/minecraft/client/renderer/item/properties/conditional/ItemModelPropertyTest.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { RegistryContextSwapper } from '../../../../../net/minecraft/util/RegistryContextSwapper.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class ConditionalItemModel$Unbaked extends Record implements ItemModel$Unbaked {
    static MAP_CODEC: MapCodec<ConditionalItemModel$Unbaked>;
    constructor(transformation: Optional<Transformation>, property: ConditionalItemModelProperty, onTrue: ItemModel$Unbaked, onFalse: ItemModel$Unbaked)
    // private onFalse: ItemModel$Unbaked;
    // private onTrue: ItemModel$Unbaked;
    // private property: ConditionalItemModelProperty;
    // private transformation: Optional<Transformation>;
    // private adaptProperty(originalProperty: ConditionalItemModelProperty, contextSwapper: RegistryContextSwapper): (param0: ItemStack, param1: ClientLevel, param2: LivingEntity, param3: number, param4: ItemDisplayContext) => boolean;
    bake(context: ItemModel$BakingContext, transformation: Matrix4fc): ItemModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    onFalse(): ItemModel$Unbaked;
    onTrue(): ItemModel$Unbaked;
    property(): ConditionalItemModelProperty;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    toString(): string;
    transformation(): Optional<Transformation>;
    type(): MapCodec<ConditionalItemModel$Unbaked>;
}