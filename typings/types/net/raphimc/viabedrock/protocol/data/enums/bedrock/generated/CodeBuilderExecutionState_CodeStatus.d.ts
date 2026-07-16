import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CodeBuilderExecutionState_CodeStatus extends Enum<CodeBuilderExecutionState_CodeStatus> {
    static Error: CodeBuilderExecutionState_CodeStatus;
    static InProgress: CodeBuilderExecutionState_CodeStatus;
    static None: CodeBuilderExecutionState_CodeStatus;
    static NotStarted: CodeBuilderExecutionState_CodeStatus;
    static Paused: CodeBuilderExecutionState_CodeStatus;
    static Succeeded: CodeBuilderExecutionState_CodeStatus;
    static getByName(paramarg0: string): CodeBuilderExecutionState_CodeStatus;
    static getByName(paramarg0: string, paramarg1: CodeBuilderExecutionState_CodeStatus): CodeBuilderExecutionState_CodeStatus;
    static getByValue(paramarg0: number): CodeBuilderExecutionState_CodeStatus;
    static getByValue(paramarg0: number, paramarg1: CodeBuilderExecutionState_CodeStatus): CodeBuilderExecutionState_CodeStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CodeBuilderExecutionState_CodeStatus;
    static values(): CodeBuilderExecutionState_CodeStatus[];
    private constructor(arg2: number)
    private constructor(arg2: CodeBuilderExecutionState_CodeStatus)
    readonly value: number;
    getValue(): number;
    name(): "None" | "NotStarted" | "InProgress" | "Paused" | "Error" | "Succeeded";
}