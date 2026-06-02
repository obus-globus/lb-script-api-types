import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { CameraRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
export interface ParticleGroupRenderState extends Object{
    clear(): void;
    submit(submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}