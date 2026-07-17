import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/MemberSignature.d.ts'
export abstract class AbstractBinaryClassAnnotationLoader$AnnotationsContainer<A extends unknown> extends Object {
    constructor()
    getMemberAnnotations(): JavaMap<MemberSignature, A[]>;
}