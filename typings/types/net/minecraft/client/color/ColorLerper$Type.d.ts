import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { DyeColor } from '../../../../net/minecraft/world/item/DyeColor.d.ts'
export class ColorLerper$Type extends Enum<ColorLerper$Type> {
    static MUSIC_NOTE: ColorLerper$Type;
    static SHEEP: ColorLerper$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ColorLerper$Type;
    static values(): ColorLerper$Type[];
    private constructor(colorDuration: number, colors: DyeColor[], brightness: number)
    // private colorByDye: Map<DyeColor, number>;
    // private colorDuration: number;
    // private colors: DyeColor[];
    getColor(dyeColor: DyeColor): number;
    name(): "SHEEP" | "MUSIC_NOTE";
}