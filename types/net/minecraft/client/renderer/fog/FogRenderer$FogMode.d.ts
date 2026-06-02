import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FogRenderer$FogMode extends Enum<FogRenderer$FogMode> {
    static NONE: FogRenderer$FogMode;
    static WORLD: FogRenderer$FogMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FogRenderer$FogMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "WORLD";
}