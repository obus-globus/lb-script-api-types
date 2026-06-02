import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureFormat } from '../../../../../net/irisshaders/iris/pbr/format/TextureFormat.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class TextureFormatLoader extends Object {
    static LOCATION: Identifier;
    static getFormat(): TextureFormat;
    static reload(paramarg0: ResourceManager): void;
    constructor()
}