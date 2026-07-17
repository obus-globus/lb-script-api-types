import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { DyeColor } from '../../../../net/minecraft/world/item/DyeColor.d.ts'
export class ColorLerper$Type extends Enum<ColorLerper$Type> {
    static MUSIC_NOTE: ColorLerper$Type;
    static SHEEP: ColorLerper$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ColorLerper$Type;
    static values(): ColorLerper$Type[];
    private constructor(colorDuration: number, colors: DyeColor[], brightness: number)
    // private colorByDye: JavaMap<DyeColor, number>;
    // private colorDuration: number;
    // private colors: DyeColor[];
    getColor(dyeColor: DyeColor): number;
    name(): "SHEEP" | "MUSIC_NOTE";
}