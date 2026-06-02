import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class SingleQuadParticle$Layer extends Record {
    static OPAQUE: SingleQuadParticle$Layer;
    static OPAQUE_ITEMS: SingleQuadParticle$Layer;
    static OPAQUE_TERRAIN: SingleQuadParticle$Layer;
    static TRANSLUCENT: SingleQuadParticle$Layer;
    static TRANSLUCENT_ITEMS: SingleQuadParticle$Layer;
    static TRANSLUCENT_TERRAIN: SingleQuadParticle$Layer;
    static bySprite(paramsprite: TextureAtlasSprite): SingleQuadParticle$Layer;
    // private pipeline: RenderPipeline;
    // private textureAtlasLocation: Identifier;
    // private translucent: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pipeline(): RenderPipeline;
    textureAtlasLocation(): Identifier;
    toString(): string;
    translucent(): boolean;
}