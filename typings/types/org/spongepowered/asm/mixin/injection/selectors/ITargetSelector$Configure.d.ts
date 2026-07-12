import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ITargetSelector$Configure extends Enum<ITargetSelector$Configure> {
    static CLEAR_LIMITS: ITargetSelector$Configure;
    static MOVE: ITargetSelector$Configure;
    static ORPHAN: ITargetSelector$Configure;
    static PERMISSIVE: ITargetSelector$Configure;
    static SELECT_INSTRUCTION: ITargetSelector$Configure;
    static SELECT_MEMBER: ITargetSelector$Configure;
    static TRANSFORM: ITargetSelector$Configure;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ITargetSelector$Configure;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private requiredArgs: number;
    checkArgs(...arg0: string[]): void;
    name(): "SELECT_MEMBER" | "SELECT_INSTRUCTION" | "MOVE" | "ORPHAN" | "TRANSFORM" | "PERMISSIVE" | "CLEAR_LIMITS";
}