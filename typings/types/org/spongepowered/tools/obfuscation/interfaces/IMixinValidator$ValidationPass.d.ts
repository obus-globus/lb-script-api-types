import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IMixinValidator$ValidationPass extends Enum<IMixinValidator$ValidationPass> {
    static EARLY: IMixinValidator$ValidationPass;
    static FINAL: IMixinValidator$ValidationPass;
    static LATE: IMixinValidator$ValidationPass;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IMixinValidator$ValidationPass;
    static values(): IMixinValidator$ValidationPass[];
    private constructor()
    name(): "EARLY" | "LATE" | "FINAL";
}