import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableMesh } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableMesh.d.ts'
import type { QuadEmitter } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { FabricLayerRenderState } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/FabricLayerRenderState.d.ts'
import type { FabricRenderState } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { LayerRenderStateExtension } from '../../../../../net/fabricmc/fabric/impl/client/renderer/LayerRenderStateExtension.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { ItemTransform } from '../../../../../net/minecraft/client/resources/model/cuboid/ItemTransform.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ItemStackRenderState$LayerRenderState extends Object implements FabricLayerRenderState, FabricRenderState, LayerRenderStateExtension {
    static EMPTY_TINTS: number[];
    static NO_EXTENTS_SUPPLIER: () => (Object | null)[];
    constructor(null_: ItemStackRenderState$LayerRenderState)
    // private argumentForSpecialRendering: Object;
    readonly extents: () => Vector3fc[];
    readonly foilType: ItemStackRenderState$FoilType;
    readonly itemTransform: ItemTransform;
    readonly localTransform: Matrix4f;
    // private mutableMesh: MutableMesh;
    // private parentState: ItemStackRenderState;
    readonly particleMaterial: Material$Baked;
    // private quads: BakedQuad[];
    // private renderStateData: Map<Object | null, Object | null>;
    // private specialRenderer: SpecialModelRenderer<Object>;
    // private tintLayers: (Object | null)[];
    readonly usesBlockLight: boolean;
    // private applyTransform(localPose: PoseStack$Pose): void;
    clear(): void;
    clearExtraData(): void;
    emitter(): QuadEmitter;
    fabric_getMutableMesh(): MutableMesh;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    // private iris$setupId(arg0: Item, arg1: Identifier): void;
    prepareQuadList(): BakedQuad[];
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
    setExtents(extents: () => Vector3fc[]): void;
    setFoilType(foilType: ItemStackRenderState$FoilType): void;
    setItemTransform(transform: ItemTransform): void;
    setLocalTransform(transform: Matrix4fc): void;
    setParticleMaterial(particleMaterial: Material$Baked): void;
    setUsesBlockLight(usesBlockLight: boolean): void;
    setupSpecialModel<T extends Object | number | string | boolean>(renderer: SpecialModelRenderer<T>, argument: T): void;
    // private submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, outlineColor: number): void;
    tintLayers(): (Object | null)[];
}