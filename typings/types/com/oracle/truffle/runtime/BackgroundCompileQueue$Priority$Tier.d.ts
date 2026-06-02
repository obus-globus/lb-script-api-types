import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BackgroundCompileQueue$Priority$Tier extends Enum<BackgroundCompileQueue$Priority$Tier> {
    static FIRST: BackgroundCompileQueue$Priority$Tier;
    static INITIALIZATION: BackgroundCompileQueue$Priority$Tier;
    static LAST: BackgroundCompileQueue$Priority$Tier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BackgroundCompileQueue$Priority$Tier;
    static values(): (Object | null)[];
    private constructor()
    name(): "INITIALIZATION" | "FIRST" | "LAST";
}