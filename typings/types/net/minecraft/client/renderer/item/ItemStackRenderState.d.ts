import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { ItemContextState } from '../../../../../net/irisshaders/iris/mixinterface/ItemContextState.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { ItemStackRenderState$LayerRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$LayerRenderState.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ItemStackRenderState extends Object implements FabricRenderState, ItemContextState {
    constructor()
    // private activeLayerCount: number;
    readonly animated: boolean;
    // private cachedModelBoundingBox: AABB;
    // private displayContext: ItemDisplayContext;
    // private iris_displayModelId: Identifier;
    // private iris_displayStack: Item;
    // private layers: ItemStackRenderState$LayerRenderState[];
    readonly oversizedInGui: boolean;
    // private renderStateData: Map<Object | null, Object | null>;
    appendModelIdentityElement(element: Object): void;
    clear(): void;
    clearExtraData(): void;
    ensureCapacity(requestedCount: number): void;
    // private firstLayer(): ItemStackRenderState$LayerRenderState;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    getDisplayItem(): Item;
    getDisplayItemModel(): Identifier;
    getModelBoundingBox(): AABB;
    isAnimated(): boolean;
    isEmpty(): boolean;
    isOversizedInGui(): boolean;
    newLayer(): ItemStackRenderState$LayerRenderState;
    pickParticleMaterial(randomSource: RandomSource): Material$Baked;
    setAnimated(): void;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
    setDisplayItem(arg0: Item, arg1: Identifier): void;
    setOversizedInGui(oversizedInGui: boolean): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, outlineColor: number): void;
    usesBlockLight(): boolean;
    visitExtents(output: (param0: Vector3fc) => void): void;
}