import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { ModelRenderProperties } from '../../../../../net/minecraft/client/renderer/item/ModelRenderProperties.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { ItemOwner } from '../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class MissingItemModel extends Object implements ItemModel {
    private constructor(quads: BakedQuad[], extents: () => Vector3fc[], properties: ModelRenderProperties, transform: Matrix4fc)
    constructor(quads: BakedQuad[], properties: ModelRenderProperties)
    // private extents: () => Vector3fc[];
    // private properties: ModelRenderProperties;
    // private quads: BakedQuad[];
    // private transform: Matrix4fc;
    update(output: ItemStackRenderState, item: ItemStack, resolver: ItemModelResolver, displayContext: ItemDisplayContext, level: ClientLevel, owner: ItemOwner, seed: number): void;
    withTransform(transform: Matrix4fc): MissingItemModel;
}