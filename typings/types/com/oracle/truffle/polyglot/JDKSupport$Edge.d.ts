import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class JDKSupport$Edge extends Enum<JDKSupport$Edge> {
    static READS: JDKSupport$Edge;
    static USES: JDKSupport$Edge;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JDKSupport$Edge;
    static values(): (Object | null)[];
    private constructor()
    name(): "READS" | "USES";
}