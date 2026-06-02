import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { Quaternionf } from '../../../../org/joml/Quaternionf.d.ts'
export interface SingleQuadParticle$FacingCameraMode extends Object{
    setRotation(target: Quaternionf, camera: Camera, partialTickTime: number): void;
}