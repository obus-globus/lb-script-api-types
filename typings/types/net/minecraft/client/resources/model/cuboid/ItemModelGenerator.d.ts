import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { SpriteContents } from '../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelDebugName } from '../../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { UnbakedModel } from '../../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
import type { UnbakedModel$GuiLight } from '../../../../../../net/minecraft/client/resources/model/UnbakedModel$GuiLight.d.ts'
import type { ItemTransforms } from '../../../../../../net/minecraft/client/resources/model/cuboid/ItemTransforms.d.ts'
import type { UnbakedGeometry } from '../../../../../../net/minecraft/client/resources/model/geometry/UnbakedGeometry.d.ts'
import type { TextureSlots } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { TextureSlots$Data } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$Data.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ItemModelGenerator extends Object implements UnbakedModel {
    static GENERATED_ITEM_MODEL_ID: Identifier;
    static LAYERS: string[];
    static MAX_Z: number;
    static MIN_Z: number;
    static PARTICLE_TEXTURE_REFERENCE: string;
    static UV_SHRINK: number;
    static isTransparent(paramsprite: SpriteContents, paramframe: number, paramx: number, paramy: number, paramwidth: number, paramheight: number): boolean;
    constructor()
    ambientOcclusion(): boolean;
    geometry(): (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => kotlin.String) => net.minecraft.client.resources.model.geometry.QuadCollection;
    geometry(): (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => kotlin.String) => net.minecraft.client.resources.model.geometry.QuadCollection;
    guiLight(): UnbakedModel$GuiLight;
    guiLight(): UnbakedModel$GuiLight;
    parent(): Identifier;
    textureSlots(): TextureSlots$Data;
    textureSlots(): TextureSlots$Data;
    transforms(): ItemTransforms;
}