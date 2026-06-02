import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ParticleDescription extends Object {
    static fromJson(paramdata: JsonObject): ParticleDescription;
    private constructor(textures: Identifier[])
    readonly textures: Identifier[];
    getTextures(): Identifier[];
}