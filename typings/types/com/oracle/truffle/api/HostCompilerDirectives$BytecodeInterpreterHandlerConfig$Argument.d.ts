import type { HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind } from '../../../../com/oracle/truffle/api/HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind.d.ts'
import type { HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$Field } from '../../../../com/oracle/truffle/api/HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$Field.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument extends Annotation, Object{
    /*not mapped: */ expand(): HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$ExpansionKind;
    /*not mapped: */ fields(): HostCompilerDirectives$BytecodeInterpreterHandlerConfig$Argument$Field[];
    /*not mapped: */ nonNull(): boolean;
    /*not mapped: */ returnValue(): boolean;
}