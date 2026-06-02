import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export interface IAnnotatedElement extends Object{
    getAnnotation(arg0: Class<Annotation>): IAnnotationHandle;
}