import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/MemberSignature.d.ts'
export abstract class AbstractBinaryClassAnnotationLoader$AnnotationsContainer<A extends Object | number | string | boolean> extends Object {
    constructor()
    getMemberAnnotations(): Map<MemberSignature, A[]>;
}