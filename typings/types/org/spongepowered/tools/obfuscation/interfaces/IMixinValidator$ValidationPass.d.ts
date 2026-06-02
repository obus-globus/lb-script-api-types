import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IMixinValidator$ValidationPass extends Enum<IMixinValidator$ValidationPass> {
    static EARLY: IMixinValidator$ValidationPass;
    static FINAL: IMixinValidator$ValidationPass;
    static LATE: IMixinValidator$ValidationPass;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IMixinValidator$ValidationPass;
    static values(): (Object | null)[];
    private constructor()
    name(): "EARLY" | "LATE" | "FINAL";
}