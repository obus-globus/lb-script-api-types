import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CompilerDirectives$TruffleBoundary extends Annotation, Object{
    /*not mapped: */ allowInlining(): boolean;
    /*not mapped: */ transferToInterpreterOnException(): boolean;
}