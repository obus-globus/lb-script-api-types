import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRTextureLoader } from '../../../../../net/irisshaders/iris/pbr/loader/PBRTextureLoader.d.ts'
import type { PBRTextureLoader$PBRTextureConsumer } from '../../../../../net/irisshaders/iris/pbr/loader/PBRTextureLoader$PBRTextureConsumer.d.ts'
import type { PBRType } from '../../../../../net/irisshaders/iris/pbr/texture/PBRType.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { ReloadableTexture } from '../../../../../net/minecraft/client/renderer/texture/ReloadableTexture.d.ts'
import type { SimpleTexture } from '../../../../../net/minecraft/client/renderer/texture/SimpleTexture.d.ts'
import type { TextureContents } from '../../../../../net/minecraft/client/renderer/texture/TextureContents.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class SimplePBRLoader extends Object implements PBRTextureLoader<SimpleTexture> {
    constructor()
    createPBRTexture(arg0: Identifier, arg1: ResourceManager, arg2: PBRType): AbstractTexture;
    load(arg0: SimpleTexture, arg1: ResourceManager, arg2: PBRTextureLoader$PBRTextureConsumer): void;
    // private loadContentsSafe(arg0: ReloadableTexture, arg1: ResourceManager): TextureContents;
}