import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Requirement$RequirementOperator extends Enum<Requirement$RequirementOperator> {
    static AND: Requirement$RequirementOperator;
    static OR: Requirement$RequirementOperator;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Requirement$RequirementOperator;
    static values(): Requirement$RequirementOperator[];
    private constructor(arg2: string)
    // private s: string;
    asString(): string;
    name(): "AND" | "OR";
}