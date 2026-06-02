import type { Object } from '../../../../java/lang/Object.d.ts'
import type { UniformHolder } from '../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { Vector3d } from '../../../../org/joml/Vector3d.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector3i } from '../../../../org/joml/Vector3i.d.ts'
export class CameraUniforms extends Object {
    static addCameraUniforms(paramarg0: UniformHolder, paramarg1: FrameUpdateNotifier): void;
    static getCameraPositionFract(paramarg0: Vector3d): Vector3f;
    static getCameraPositionInt(paramarg0: Vector3d): Vector3i;
    static getUnshiftedCameraPosition(): Vector3d;
    private constructor()
}