import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FogRenderer$FogMode extends Enum<FogRenderer$FogMode> {
    static NONE: FogRenderer$FogMode;
    static WORLD: FogRenderer$FogMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FogRenderer$FogMode;
    static values(): FogRenderer$FogMode[];
    private constructor()
    name(): "NONE" | "WORLD";
}