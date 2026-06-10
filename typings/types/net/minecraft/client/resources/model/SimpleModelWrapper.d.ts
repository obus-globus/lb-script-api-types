import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ModelState } from '../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { QuadCollection } from '../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class SimpleModelWrapper extends Record implements BlockStateModelPart {
    static bake(parammodelBakery: ModelBaker, paramlocation: Identifier, paramstate: ModelState): BlockStateModelPart;
    // private particleMaterial: Material$Baked;
    // private quads: QuadCollection;
    // private useAmbientOcclusion: boolean;
    emitQuads(arg0: QuadEmitter, arg1: (param0: Object) => boolean): void;
    equals(o: Object | null): boolean;
    getQuads(direction: Direction): BakedQuad[];
    hashCode(): number;
    materialFlags(): number;
    particleMaterial(): Material$Baked;
    quads(): QuadCollection;
    toString(): string;
    useAmbientOcclusion(): boolean;
}