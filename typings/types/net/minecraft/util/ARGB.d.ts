import type { Object } from '../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
import type { Vector4f } from '../../../org/joml/Vector4f.d.ts'
export class ARGB extends Object {
    static addRgb(paramlhs: number, paramrhs: number): number;
    static alpha(paramcolor: number): number;
    static alphaBlend(paramdestination: number, paramsource: number): number;
    static alphaFloat(paramcolor: number): number;
    static as8BitChannel(paramvalue: number): number;
    static average(paramlhs: number, paramrhs: number): number;
    static black(paramalpha: number): number;
    static blue(paramcolor: number): number;
    static blueFloat(paramcolor: number): number;
    static color(paramalpha: number, paramrgb: number): number;
    static color(paramred: number, paramgreen: number, paramblue: number): number;
    static color(paramalpha: number, paramred: number, paramgreen: number, paramblue: number): number;
    static color(paramvec: Vec3): number;
    static colorFromFloat(paramalpha: number, paramred: number, paramgreen: number, paramblue: number): number;
    static fromABGR(paramcolor: number): number;
    static gray(parambrightness: number): number;
    static green(paramcolor: number): number;
    static greenFloat(paramcolor: number): number;
    static greyscale(paramcolor: number): number;
    static linearLerp(paramalpha: number, paramp0: number, paramp1: number): number;
    static linearToSrgbChannel(paramlinear: number): number;
    static meanLinear(paramsrgb1: number, paramsrgb2: number, paramsrgb3: number, paramsrgb4: number): number;
    static multiply(paramlhs: number, paramrhs: number): number;
    static multiplyAlpha(paramcolor: number, paramalphaMultiplier: number): number;
    static opaque(paramcolor: number): number;
    static red(paramcolor: number): number;
    static redFloat(paramcolor: number): number;
    static scaleRGB(paramcolor: number, paramscale: number): number;
    static scaleRGB(paramcolor: number, paramscaleR: number, paramscaleG: number, paramscaleB: number): number;
    static setBrightness(paramcolor: number, parambrightness: number): number;
    static setVector4fFromARGB32(paramdest: Vector4f, paramcolor: number): Vector4f;
    static srgbLerp(paramalpha: number, paramp0: number, paramp1: number): number;
    static srgbToLinearChannel(paramsrgb: number): number;
    static subtractRgb(paramlhs: number, paramrhs: number): number;
    static toABGR(paramcolor: number): number;
    static transparent(paramcolor: number): number;
    static vector3fFromRGB24(paramcolor: number): Vector3f;
    static vector4fFromARGB32(paramcolor: number): Vector4f;
    static white(paramalpha: number): number;
    constructor()
}