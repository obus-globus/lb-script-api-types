import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRSpriteHolder } from '../../../../../net/irisshaders/iris/pbr/texture/PBRSpriteHolder.d.ts'
export interface SpriteContentsExtension extends Object{
    getOrCreatePBRHolder(): PBRSpriteHolder;
    getPBRHolder(): PBRSpriteHolder;
}