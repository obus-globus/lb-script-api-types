import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IrisShadowProgram extends Enum<IrisShadowProgram> {
    static SHADOW: IrisShadowProgram;
    static SHADOW_BLOCK: IrisShadowProgram;
    static SHADOW_ENTITIES: IrisShadowProgram;
    static SHADOW_TRANSLUCENT: IrisShadowProgram;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IrisShadowProgram;
    static values(): IrisShadowProgram[];
    private constructor()
    name(): "SHADOW" | "SHADOW_TRANSLUCENT" | "SHADOW_ENTITIES" | "SHADOW_BLOCK";
}