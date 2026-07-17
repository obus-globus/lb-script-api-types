import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VertexBufferWriter } from '../../../../../../net/caffeinemc/mods/sodium/api/vertex/buffer/VertexBufferWriter.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { CameraRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { ParticleGroupRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/ParticleGroupRenderState.d.ts'
import type { QuadParticleRenderState$Storage } from '../../../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState$Storage.d.ts'
import type { Quaternionf } from '../../../../../../org/joml/Quaternionf.d.ts'
export class QuadParticleRenderState extends Object implements ParticleGroupRenderState {
    constructor()
    // private particleCount: number;
    // private particles: JavaMap<SingleQuadParticle$Layer, QuadParticleRenderState$Storage>;
    add(layer: SingleQuadParticle$Layer, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, wRot: number, scale: number, u0: number, u1: number, v0: number, v1: number, color: number, lightCoords: number): void;
    buildLayer(layer: SingleQuadParticle$Layer, bufferBuilder: VertexConsumer): void;
    clear(): void;
    isEmpty(): boolean;
    layers(): SingleQuadParticle$Layer[];
    renderRotatedQuad(builder: VertexConsumer, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, wRot: number, scale: number, u0: number, u1: number, v0: number, v1: number, color: number, lightCoords: number): void;
    // private renderVertex(builder: VertexConsumer, rotation: Quaternionf, x: number, y: number, z: number, nx: number, ny: number, scale: number, u: number, v: number, color: number, lightCoords: number): void;
    // private sodium$emitVertices(arg0: VertexBufferWriter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: Quaternionf): void;
    submit(submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}