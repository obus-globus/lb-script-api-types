import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRAtlasHolder } from '../../../../../net/irisshaders/iris/pbr/texture/PBRAtlasHolder.d.ts'
export interface TextureAtlasExtension extends Object{
    getOrCreatePBRHolder(): PBRAtlasHolder;
    getPBRHolder(): PBRAtlasHolder;
}