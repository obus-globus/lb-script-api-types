import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ItemStackRenderState$FoilType extends Enum<ItemStackRenderState$FoilType> {
    static NONE: ItemStackRenderState$FoilType;
    static SPECIAL: ItemStackRenderState$FoilType;
    static STANDARD: ItemStackRenderState$FoilType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ItemStackRenderState$FoilType;
    static values(): ItemStackRenderState$FoilType[];
    private constructor()
    name(): "NONE" | "STANDARD" | "SPECIAL";
}