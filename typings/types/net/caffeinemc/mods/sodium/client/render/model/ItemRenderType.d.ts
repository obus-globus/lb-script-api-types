import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { RenderType } from '../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class ItemRenderType extends Enum<ItemRenderType> {
    static CUTOUT: ItemRenderType;
    static CUTOUT_BLOCK: ItemRenderType;
    static TRANSLUCENT: ItemRenderType;
    static TRANSLUCENT_BLOCK: ItemRenderType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ItemRenderType;
    static values(): ItemRenderType[];
    private constructor(arg2: RenderType)
    // private renderType: RenderType;
    name(): "CUTOUT" | "TRANSLUCENT" | "CUTOUT_BLOCK" | "TRANSLUCENT_BLOCK";
}