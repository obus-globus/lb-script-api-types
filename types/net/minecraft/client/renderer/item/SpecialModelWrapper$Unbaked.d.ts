import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { ModelRenderProperties } from '../../../../../net/minecraft/client/renderer/item/ModelRenderProperties.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class SpecialModelWrapper$Unbaked extends Record implements ItemModel$Unbaked {
    static MAP_CODEC: MapCodec<SpecialModelWrapper$Unbaked>;
    constructor(base: Identifier, transformation: Optional<Transformation>, specialModel: SpecialModelRenderer$Unbaked<Object>)
    // private base: Identifier;
    // private specialModel: SpecialModelRenderer$Unbaked<Object>;
    // private transformation: Optional<Transformation>;
    bake(context: ItemModel$BakingContext, transformation: Matrix4fc): ItemModel;
    base(): Identifier;
    equals(o: Object | null): boolean;
    // private getProperties(context: ItemModel$BakingContext): ModelRenderProperties;
    hashCode(): number;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    specialModel(): SpecialModelRenderer$Unbaked<Object>;
    toString(): string;
    transformation(): Optional<Transformation>;
    type(): MapCodec<SpecialModelWrapper$Unbaked>;
}