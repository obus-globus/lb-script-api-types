import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AtlasPBRLoader$PBRTextureAtlasSprite } from '../../../../../net/irisshaders/iris/pbr/loader/AtlasPBRLoader$PBRTextureAtlasSprite.d.ts'
import type { PBRTextureLoader } from '../../../../../net/irisshaders/iris/pbr/loader/PBRTextureLoader.d.ts'
import type { PBRTextureLoader$PBRTextureConsumer } from '../../../../../net/irisshaders/iris/pbr/loader/PBRTextureLoader$PBRTextureConsumer.d.ts'
import type { ChannelMipmapGenerator } from '../../../../../net/irisshaders/iris/pbr/mipmap/ChannelMipmapGenerator.d.ts'
import type { PBRType } from '../../../../../net/irisshaders/iris/pbr/texture/PBRType.d.ts'
import type { TextureAtlas } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class AtlasPBRLoader extends Object implements PBRTextureLoader<TextureAtlas> {
    static LINEAR_MIPMAP_GENERATOR: ChannelMipmapGenerator;
    constructor()
    createPBRSprite(arg0: TextureAtlasSprite, arg1: ResourceManager, arg2: TextureAtlas, arg3: number, arg4: number, arg5: number, arg6: PBRType): AtlasPBRLoader$PBRTextureAtlasSprite;
    getPBRImageLocation(arg0: Identifier, arg1: PBRType): Identifier;
    load(arg0: TextureAtlas, arg1: ResourceManager, arg2: PBRTextureLoader$PBRTextureConsumer): void;
}