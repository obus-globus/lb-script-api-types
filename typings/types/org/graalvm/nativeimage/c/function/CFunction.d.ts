import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CFunction$Transition } from '../../../../../org/graalvm/nativeimage/c/function/CFunction$Transition.d.ts'
export interface CFunction extends Annotation, Object{
    /*not mapped: */ transition(): CFunction$Transition;
    /*not mapped: */ value(): string;
}