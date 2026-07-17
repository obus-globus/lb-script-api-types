import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractBinaryClassAnnotationLoader$AnnotationsContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationLoader$AnnotationsContainer.d.ts'
import type { MemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/MemberSignature.d.ts'
export class AnnotationsContainerWithConstants<A extends unknown, C extends unknown> extends AbstractBinaryClassAnnotationLoader$AnnotationsContainer<A> {
    constructor(arg0: JavaMap<MemberSignature, A[]>, arg1: JavaMap<MemberSignature, C>, arg2: JavaMap<MemberSignature, C>)
    readonly annotationParametersDefaultValues: JavaMap<MemberSignature, C>;
    readonly memberAnnotations: JavaMap<MemberSignature, A[]>;
    readonly propertyConstants: JavaMap<MemberSignature, C>;
    getAnnotationParametersDefaultValues(): JavaMap<MemberSignature, C>;
    getMemberAnnotations(): JavaMap<MemberSignature, A[]>;
    getPropertyConstants(): JavaMap<MemberSignature, C>;
}