import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SubmitNodeStorage } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
export interface ParticleRenderStateExtension extends Object{
    submitWithoutItems(arg0: SubmitNodeStorage, arg1: CameraRenderState): void;
}