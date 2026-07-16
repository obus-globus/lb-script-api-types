import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ScriptEnvironment$FunctionStatementBehavior extends Enum<ScriptEnvironment$FunctionStatementBehavior> {
    static ACCEPT: ScriptEnvironment$FunctionStatementBehavior;
    static ERROR: ScriptEnvironment$FunctionStatementBehavior;
    static WARNING: ScriptEnvironment$FunctionStatementBehavior;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ScriptEnvironment$FunctionStatementBehavior;
    static values(): ScriptEnvironment$FunctionStatementBehavior[];
    private constructor()
    name(): "ACCEPT" | "WARNING" | "ERROR";
}