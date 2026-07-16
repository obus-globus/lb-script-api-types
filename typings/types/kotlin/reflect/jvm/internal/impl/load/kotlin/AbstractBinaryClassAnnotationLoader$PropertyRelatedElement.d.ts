import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AbstractBinaryClassAnnotationLoader$PropertyRelatedElement extends Enum<AbstractBinaryClassAnnotationLoader$PropertyRelatedElement> {
    static BACKING_FIELD: AbstractBinaryClassAnnotationLoader$PropertyRelatedElement;
    static DELEGATE_FIELD: AbstractBinaryClassAnnotationLoader$PropertyRelatedElement;
    static PROPERTY: AbstractBinaryClassAnnotationLoader$PropertyRelatedElement;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AbstractBinaryClassAnnotationLoader$PropertyRelatedElement;
    static values(): AbstractBinaryClassAnnotationLoader$PropertyRelatedElement[];
    private constructor()
    name(): "PROPERTY" | "BACKING_FIELD" | "DELEGATE_FIELD";
}