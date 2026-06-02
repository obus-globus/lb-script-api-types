import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { Vector3d } from '../../../../org/joml/Vector3d.d.ts'
export class CameraUniforms$CameraPositionTracker extends Object {
    constructor(arg0: FrameUpdateNotifier)
    readonly currentCameraPosition: Vector3d;
    // private currentCameraPositionUnshifted: Vector3d;
    readonly previousCameraPosition: Vector3d;
    readonly previousCameraPositionUnshifted: Vector3d;
    // private shift: Vector3d;
    // private applyShift(arg0: number, arg1: number): void;
    getCurrentCameraPosition(): Vector3d;
    getCurrentCameraPositionY(): number;
    getPreviousCameraPosition(): Vector3d;
    getPreviousCameraPositionUnshifted(): Vector3d;
    // private update(): void;
    // private updateShift(): void;
}