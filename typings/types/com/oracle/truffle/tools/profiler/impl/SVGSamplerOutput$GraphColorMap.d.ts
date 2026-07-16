import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SVGSamplerOutput$GraphColorMap extends Enum<SVGSamplerOutput$GraphColorMap> {
    static AQUA: SVGSamplerOutput$GraphColorMap;
    static BLUE: SVGSamplerOutput$GraphColorMap;
    static FLAME: SVGSamplerOutput$GraphColorMap;
    static GRAY: SVGSamplerOutput$GraphColorMap;
    static GREEN: SVGSamplerOutput$GraphColorMap;
    static ORANGE: SVGSamplerOutput$GraphColorMap;
    static PURPLE: SVGSamplerOutput$GraphColorMap;
    static RED: SVGSamplerOutput$GraphColorMap;
    static YELLOW: SVGSamplerOutput$GraphColorMap;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SVGSamplerOutput$GraphColorMap;
    static values(): SVGSamplerOutput$GraphColorMap[];
    private constructor()
    name(): "FLAME" | "AQUA" | "ORANGE" | "GREEN" | "RED" | "YELLOW" | "PURPLE" | "BLUE" | "GRAY";
}