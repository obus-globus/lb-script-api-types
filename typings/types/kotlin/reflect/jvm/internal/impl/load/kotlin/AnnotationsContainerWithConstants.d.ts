import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractBinaryClassAnnotationLoader$AnnotationsContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationLoader$AnnotationsContainer.d.ts'
import type { MemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/MemberSignature.d.ts'
export class AnnotationsContainerWithConstants<A extends unknown, C extends unknown> extends AbstractBinaryClassAnnotationLoader$AnnotationsContainer<A> {
    constructor(arg0: Map<MemberSignature, A[]>, arg1: Map<MemberSignature, C>, arg2: Map<MemberSignature, C>)
    readonly annotationParametersDefaultValues: Map<MemberSignature, C>;
    readonly memberAnnotations: Map<MemberSignature, A[]>;
    readonly propertyConstants: Map<MemberSignature, C>;
    getAnnotationParametersDefaultValues(): Map<MemberSignature, C>;
    getMemberAnnotations(): Map<MemberSignature, A[]>;
    getPropertyConstants(): Map<MemberSignature, C>;
}