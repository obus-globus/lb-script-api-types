import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$BytecodeTransitionKind extends Enum<PolyglotEngineOptions$BytecodeTransitionKind> {
    static bytecode: PolyglotEngineOptions$BytecodeTransitionKind;
    static instrumentation: PolyglotEngineOptions$BytecodeTransitionKind;
    static tag: PolyglotEngineOptions$BytecodeTransitionKind;
    static tier: PolyglotEngineOptions$BytecodeTransitionKind;
    static transferToInterpreter: PolyglotEngineOptions$BytecodeTransitionKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotEngineOptions$BytecodeTransitionKind;
    static values(): PolyglotEngineOptions$BytecodeTransitionKind[];
    private constructor()
    name(): "transferToInterpreter" | "bytecode" | "tier" | "tag" | "instrumentation";
}