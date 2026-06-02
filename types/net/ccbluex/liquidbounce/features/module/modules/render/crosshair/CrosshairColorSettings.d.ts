import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class CrosshairColorSettings extends ValueGroup {
    constructor()
    readonly firstColor: Color4b;
    readonly secondColor: Color4b;
    readonly spinSpeed: number;
    readonly syncColors: boolean;
    // private getColorByAngle(angle: number, color1: Color4b, color2: Color4b, speed: number): Color4b;
    getCurrentStepColor(firstColor: Color4b, secondColor: Color4b, syncColors: boolean, spinSpeed: number, angle: number): Color4b;
}