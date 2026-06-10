import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CuboidModelAccessor } from '../../../../../../net/fabricmc/fabric/mixin/client/model/loading/CuboidModelAccessor.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelDebugName } from '../../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { UnbakedModel } from '../../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
import type { UnbakedModel$GuiLight } from '../../../../../../net/minecraft/client/resources/model/UnbakedModel$GuiLight.d.ts'
import type { ItemTransforms } from '../../../../../../net/minecraft/client/resources/model/cuboid/ItemTransforms.d.ts'
import type { QuadCollection } from '../../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { UnbakedGeometry } from '../../../../../../net/minecraft/client/resources/model/geometry/UnbakedGeometry.d.ts'
import type { TextureSlots } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { TextureSlots$Data } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$Data.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class CuboidModel extends Record implements CuboidModelAccessor, UnbakedModel {
    static PARTICLE_TEXTURE_REFERENCE: string;
    static fabric_getGson(): Gson;
    static fromStream(paramreader: Reader): CuboidModel;
    constructor(geometry: (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => string) => QuadCollection, guiLight: UnbakedModel$GuiLight, ambientOcclusion: boolean, transforms: ItemTransforms, textureSlots: TextureSlots$Data, parent: Identifier)
    // private ambientOcclusion: boolean;
    // private geometry: (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => string) => QuadCollection;
    // private guiLight: UnbakedModel$GuiLight;
    // private parent: Identifier;
    // private textureSlots: TextureSlots$Data;
    // private transforms: ItemTransforms;
    ambientOcclusion(): boolean;
    equals(o: Object | null): boolean;
    geometry(): (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => string) => QuadCollection;
    guiLight(): UnbakedModel$GuiLight;
    hashCode(): number;
    parent(): Identifier;
    textureSlots(): TextureSlots$Data;
    toString(): string;
    transforms(): ItemTransforms;
}