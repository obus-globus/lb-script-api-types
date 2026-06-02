import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class HatsColorSettings extends ValueGroup {
    constructor()
    readonly firstColor: Color4b;
    readonly secondColor: Color4b;
    readonly spinSpeed: number;
    readonly syncColors: boolean;
    // private getColorByAngle(angle: number, color1: Color4b, color2: Color4b, speed: number): Color4b;
    getCurrentStepColor(angle: number): Color4b;
}