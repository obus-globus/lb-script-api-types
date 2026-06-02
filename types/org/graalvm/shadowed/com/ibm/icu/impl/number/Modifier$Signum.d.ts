import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Modifier$Signum extends Enum<Modifier$Signum> {
    static NEG: Modifier$Signum;
    static NEG_ZERO: Modifier$Signum;
    static POS: Modifier$Signum;
    static POS_ZERO: Modifier$Signum;
    static VALUES: (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Modifier$Signum;
    static values(): (Object | null)[];
    private constructor()
    name(): "NEG" | "NEG_ZERO" | "POS_ZERO" | "POS";
}