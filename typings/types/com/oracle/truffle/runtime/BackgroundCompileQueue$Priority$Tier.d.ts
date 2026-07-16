import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BackgroundCompileQueue$Priority$Tier extends Enum<BackgroundCompileQueue$Priority$Tier> {
    static FIRST: BackgroundCompileQueue$Priority$Tier;
    static INITIALIZATION: BackgroundCompileQueue$Priority$Tier;
    static LAST: BackgroundCompileQueue$Priority$Tier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BackgroundCompileQueue$Priority$Tier;
    static values(): BackgroundCompileQueue$Priority$Tier[];
    private constructor()
    name(): "INITIALIZATION" | "FIRST" | "LAST";
}