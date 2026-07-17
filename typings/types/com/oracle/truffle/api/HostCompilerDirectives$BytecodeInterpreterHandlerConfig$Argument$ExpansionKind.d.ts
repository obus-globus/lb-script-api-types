import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind extends Enum<HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind> {
    static MATERIALIZED: HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind;
    static NONE: HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind;
    static VIRTUAL: HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind;
    static values(): HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind[];
    private constructor()
    name(): "NONE" | "MATERIALIZED" | "VIRTUAL";
}