import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AgentType extends Enum<AgentType> {
    static CLOSE: AgentType;
    static ENTER: AgentType;
    static RETURN: AgentType;
    static SOURCE: AgentType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AgentType;
    static values(): AgentType[];
    private constructor()
    name(): "SOURCE" | "ENTER" | "RETURN" | "CLOSE";
}