import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemTintSource } from '../../../../../net/minecraft/client/color/item/ItemTintSource.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { ModelRenderProperties } from '../../../../../net/minecraft/client/renderer/item/ModelRenderProperties.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { QuadCollection } from '../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { ItemOwner } from '../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class CuboidItemModelWrapper extends Object implements ItemModel {
    static computeExtents(paramquads: BakedQuad[]): (Object | null)[];
    private constructor(tints: ItemTintSource[], quads: QuadCollection, properties: ModelRenderProperties, transformation: Matrix4fc)
    // private extents: () => Vector3fc[];
    // private properties: ModelRenderProperties;
    // private quads: QuadCollection;
    // private tints: ItemTintSource[];
    // private transformation: Matrix4fc;
    update(output: ItemStackRenderState, item: ItemStack, resolver: ItemModelResolver, displayContext: ItemDisplayContext, level: ClientLevel, owner: ItemOwner, seed: number): void;
}