import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureDefinitions$ItemTextureDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/TextureDefinitions$ItemTextureDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class TextureDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private itemTextures: { [key: string]: TextureDefinitions$ItemTextureDefinition[] };
    itemTextures(): { [key: string]: TextureDefinitions$ItemTextureDefinition[] };
}