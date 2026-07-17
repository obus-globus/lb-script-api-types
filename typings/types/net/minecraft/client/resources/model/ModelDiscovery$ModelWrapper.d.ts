import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AtomicReferenceArray } from '../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelDebugName } from '../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { ModelDiscovery$Slot } from '../../../../../net/minecraft/client/resources/model/ModelDiscovery$Slot.d.ts'
import type { ResolvedModel } from '../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { UnbakedModel } from '../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
import type { UnbakedModel$GuiLight } from '../../../../../net/minecraft/client/resources/model/UnbakedModel$GuiLight.d.ts'
import type { ItemTransforms } from '../../../../../net/minecraft/client/resources/model/cuboid/ItemTransforms.d.ts'
import type { QuadCollection } from '../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { UnbakedGeometry } from '../../../../../net/minecraft/client/resources/model/geometry/UnbakedGeometry.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { TextureSlots } from '../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelDiscovery$ModelWrapper extends Object implements ResolvedModel {
    static DEFAULT_AMBIENT_OCCLUSION: boolean;
    static DEFAULT_GUI_LIGHT: UnbakedModel$GuiLight;
    private constructor(id: Identifier, wrapped: UnbakedModel, valid: boolean)
    // private fixedSlots: AtomicReferenceArray<Object>;
    // private id: Identifier;
    // private modelBakeCache: JavaMap<ModelState, QuadCollection>;
    // private parent: ModelDiscovery$ModelWrapper;
    // private valid: boolean;
    // private wrapped: UnbakedModel;
    // private bakeDefaultState(textureSlots: TextureSlots, baker: ModelBaker, state: ModelState): QuadCollection;
    bakeTopGeometry(textureSlots: TextureSlots, baker: ModelBaker, state: ModelState): QuadCollection;
    debugName(): string;
    // private getSimpleProperty<T extends unknown>(key: ModelDiscovery$Slot<T>, getter: (param0: ResolvedModel) => T): T;
    // private getSlot<T extends unknown>(key: ModelDiscovery$Slot<T>): T;
    getTopAmbientOcclusion(): boolean;
    getTopGeometry(): (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => string) => QuadCollection;
    getTopGuiLight(): UnbakedModel$GuiLight;
    getTopTextureSlots(): TextureSlots;
    getTopTransforms(): ItemTransforms;
    parent(): ResolvedModel;
    resolveParticleMaterial(textureSlots: TextureSlots, baker: ModelBaker): Material$Baked;
    // private updateSlot<T extends unknown>(key: ModelDiscovery$Slot<T>, value: T): T;
    wrapped(): UnbakedModel;
}