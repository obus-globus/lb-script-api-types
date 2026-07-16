import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class JDKSupport$Edge extends Enum<JDKSupport$Edge> {
    static READS: JDKSupport$Edge;
    static USES: JDKSupport$Edge;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JDKSupport$Edge;
    static values(): JDKSupport$Edge[];
    private constructor()
    name(): "READS" | "USES";
}