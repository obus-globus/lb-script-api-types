import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UnbakedModel$GuiLight extends Enum<UnbakedModel$GuiLight> {
    static FRONT: UnbakedModel$GuiLight;
    static SIDE: UnbakedModel$GuiLight;
    static getByName(paramname: string): UnbakedModel$GuiLight;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UnbakedModel$GuiLight;
    static values(): (Object | null)[];
    private constructor(name: string)
    // private name: string;
    lightLikeBlock(): boolean;
    name(): "FRONT" | "SIDE";
}