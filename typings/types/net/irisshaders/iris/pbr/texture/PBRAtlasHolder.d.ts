import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRAtlasTexture } from '../../../../../net/irisshaders/iris/pbr/texture/PBRAtlasTexture.d.ts'
export class PBRAtlasHolder extends Object {
    constructor()
    normalAtlas: PBRAtlasTexture;
    specularAtlas: PBRAtlasTexture;
    cycleAnimationFrames(): void;
    getNormalAtlas(): PBRAtlasTexture;
    getSpecularAtlas(): PBRAtlasTexture;
    setNormalAtlas(arg0: PBRAtlasTexture): void;
    setSpecularAtlas(arg0: PBRAtlasTexture): void;
}