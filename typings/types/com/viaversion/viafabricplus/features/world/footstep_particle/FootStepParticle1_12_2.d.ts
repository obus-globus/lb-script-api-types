import type { Camera } from '../../../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { QuadParticleRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Quaternionf } from '../../../../../../org/joml/Quaternionf.d.ts'
export class FootStepParticle1_12_2 extends SingleQuadParticle {
    static ID: Identifier;
    static RAW_ID: number;
    static init(): void;
    private constructor(arg0: ClientLevel, arg1: number, arg2: number, arg3: number, arg4: TextureAtlasSprite)
    extractRotatedQuad(arg0: QuadParticleRenderState, arg1: Camera, arg2: Quaternionf, arg3: number): void;
    getLayer(): SingleQuadParticle$Layer;
}