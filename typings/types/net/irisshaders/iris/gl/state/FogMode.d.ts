import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FogMode extends Enum<FogMode> {
    static OFF: FogMode;
    static PER_FRAGMENT: FogMode;
    static PER_VERTEX: FogMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FogMode;
    static values(): FogMode[];
    private constructor()
    name(): "OFF" | "PER_VERTEX" | "PER_FRAGMENT";
}