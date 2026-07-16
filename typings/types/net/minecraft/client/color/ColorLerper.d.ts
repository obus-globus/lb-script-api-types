import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ColorLerper$Type } from '../../../../net/minecraft/client/color/ColorLerper$Type.d.ts'
import type { DyeColor } from '../../../../net/minecraft/world/item/DyeColor.d.ts'
export class ColorLerper extends Object {
    static MUSIC_NOTE_COLORS: DyeColor[];
    static getLerpedColor(paramtype: ColorLerper$Type, paramtick: number): number;
    constructor()
}