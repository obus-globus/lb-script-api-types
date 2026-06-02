import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStackRenderState$LayerRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$LayerRenderState.d.ts'
import type { ModelBaker } from '../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvedModel } from '../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { ItemTransforms } from '../../../../../net/minecraft/client/resources/model/cuboid/ItemTransforms.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { TextureSlots } from '../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
export class ModelRenderProperties extends Record {
    static fromResolvedModel(parambaker: ModelBaker, paramresolvedModel: ResolvedModel, paramtextureSlots: TextureSlots): ModelRenderProperties;
    // private particleMaterial: Material$Baked;
    // private transforms: ItemTransforms;
    // private usesBlockLight: boolean;
    applyToLayer(layer: ItemStackRenderState$LayerRenderState, displayContext: ItemDisplayContext): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    particleMaterial(): Material$Baked;
    toString(): string;
    transforms(): ItemTransforms;
    usesBlockLight(): boolean;
}