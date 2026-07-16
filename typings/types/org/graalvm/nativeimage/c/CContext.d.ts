import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { CContext$Directives } from '../../../../org/graalvm/nativeimage/c/CContext$Directives.d.ts'
export interface CContext extends Annotation, Object{
    /*not mapped: */ value(): KClass<CContext$Directives>;
}