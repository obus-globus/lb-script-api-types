import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InjectionPoint$ShiftByViolationBehaviour extends Enum<InjectionPoint$ShiftByViolationBehaviour> {
    static ERROR: InjectionPoint$ShiftByViolationBehaviour;
    static IGNORE: InjectionPoint$ShiftByViolationBehaviour;
    static WARN: InjectionPoint$ShiftByViolationBehaviour;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InjectionPoint$ShiftByViolationBehaviour;
    static values(): InjectionPoint$ShiftByViolationBehaviour[];
    private constructor()
    name(): "IGNORE" | "WARN" | "ERROR";
}