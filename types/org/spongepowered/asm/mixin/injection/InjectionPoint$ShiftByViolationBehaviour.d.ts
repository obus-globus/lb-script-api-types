import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InjectionPoint$ShiftByViolationBehaviour extends Enum<InjectionPoint$ShiftByViolationBehaviour> {
    static ERROR: InjectionPoint$ShiftByViolationBehaviour;
    static IGNORE: InjectionPoint$ShiftByViolationBehaviour;
    static WARN: InjectionPoint$ShiftByViolationBehaviour;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InjectionPoint$ShiftByViolationBehaviour;
    static values(): (Object | null)[];
    private constructor()
    name(): "IGNORE" | "WARN" | "ERROR";
}