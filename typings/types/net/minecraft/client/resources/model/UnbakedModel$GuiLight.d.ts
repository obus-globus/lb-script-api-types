import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UnbakedModel$GuiLight extends Enum<UnbakedModel$GuiLight> {
    static FRONT: UnbakedModel$GuiLight;
    static SIDE: UnbakedModel$GuiLight;
    static getByName(paramname: string): UnbakedModel$GuiLight;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UnbakedModel$GuiLight;
    static values(): UnbakedModel$GuiLight[];
    private constructor(name: string)
    // private name: string;
    lightLikeBlock(): boolean;
    name(): "FRONT" | "SIDE";
}