import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IrisShadowProgram extends Enum<IrisShadowProgram> {
    static SHADOW: IrisShadowProgram;
    static SHADOW_BLOCK: IrisShadowProgram;
    static SHADOW_ENTITIES: IrisShadowProgram;
    static SHADOW_TRANSLUCENT: IrisShadowProgram;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IrisShadowProgram;
    static values(): (Object | null)[];
    private constructor()
    name(): "SHADOW" | "SHADOW_TRANSLUCENT" | "SHADOW_ENTITIES" | "SHADOW_BLOCK";
}