import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ColorSpace } from '../../../../../net/irisshaders/iris/pathways/colorspace/ColorSpace.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
export class IrisVideoSettings extends Object {
    static RENDER_DISTANCE: OptionInstance<number>;
    static colorSpace: ColorSpace;
    static shadowDistance: number;
    static getOverriddenShadowDistance(paramarg0: number): number;
    static isShadowDistanceSliderEnabled(): boolean;
    constructor()
}