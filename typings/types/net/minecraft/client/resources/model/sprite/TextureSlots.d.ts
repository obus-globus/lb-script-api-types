import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Material } from '../../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { TextureSlots$Data } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$Data.d.ts'
export class TextureSlots extends Object {
    static EMPTY: TextureSlots;
    static parseTextureMap(paramtexturesObject: JsonObject): TextureSlots$Data;
    private constructor(resolvedValues: { [key: string]: Material })
    // private resolvedValues: { [key: string]: Material };
    getMaterial(reference: string): Material;
}