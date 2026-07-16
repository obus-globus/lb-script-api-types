import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AgentAnimation extends Enum<AgentAnimation> {
    static ArmSwing: AgentAnimation;
    static Shrug: AgentAnimation;
    static getByName(paramarg0: string): AgentAnimation;
    static getByName(paramarg0: string, paramarg1: AgentAnimation): AgentAnimation;
    static getByValue(paramarg0: number): AgentAnimation;
    static getByValue(paramarg0: number, paramarg1: AgentAnimation): AgentAnimation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AgentAnimation;
    static values(): AgentAnimation[];
    private constructor(arg2: number)
    private constructor(arg2: AgentAnimation)
    readonly value: number;
    getValue(): number;
    name(): "ArmSwing" | "Shrug";
}