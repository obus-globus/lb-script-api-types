import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface HostCompilerDirectives$BytecodeInterpreterHandler extends Annotation, Object{
    /*not mapped: */ safepoint(): boolean;
    /*not mapped: */ threading(): boolean;
    /*not mapped: */ value(): number[];
}