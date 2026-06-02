import type { Object } from '../../../../java/lang/Object.d.ts'
import type { UniformHolder } from '../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
export class CelestialUniforms extends Object {
    static getSunAngle(paramarg0: boolean): number;
    static isDay(): boolean;
    constructor(arg0: number)
    // private sunPathRotation: number;
    addCelestialUniforms(arg0: UniformHolder): void;
    // private getCelestialPosition(arg0: boolean, arg1: number): Vector4f;
    // private getCelestialPositionInWorldSpace(arg0: boolean, arg1: number): Vector4f;
    // private getEndFlashPosition(): Vector4f;
    // private getEndFlashPositionInWorldSpace(): Vector4f;
    // private getMoonPosition(): Vector4f;
    getShadowLightPosition(): Vector4f;
    getShadowLightPositionInWorldSpace(): Vector4f;
    // private getSunPosition(): Vector4f;
}