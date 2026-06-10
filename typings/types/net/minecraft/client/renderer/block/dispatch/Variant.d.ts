import type { Quadrant } from '../../../../../../com/mojang/math/Quadrant.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModelPart } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { BlockStateModelPart$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart$Unbaked.d.ts'
import type { Variant$SimpleModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/Variant$SimpleModelState.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class Variant extends Record implements BlockStateModelPart$Unbaked {
    static CODEC: Codec<Variant>;
    static MAP_CODEC: MapCodec<Variant>;
    constructor(modelLocation: Identifier)
    constructor(modelLocation: Identifier, modelState: Variant$SimpleModelState)
    // private modelLocation: Identifier;
    // private modelState: Variant$SimpleModelState;
    bake(modelBakery: ModelBaker): BlockStateModelPart;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modelLocation(): Identifier;
    modelState(): Variant$SimpleModelState;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    toString(): string;
    with(mutator: (param0: Object | null) => Object | null): Variant;
    withModel(modelLocation: Identifier): Variant;
    withState(modelState: Variant$SimpleModelState): Variant;
    withUvLock(uvLock: boolean): Variant;
    withXRot(x: Quadrant): Variant;
    withYRot(y: Quadrant): Variant;
    withZRot(z: Quadrant): Variant;
}