import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AnnotationConstructorCaller$Origin extends Enum<AnnotationConstructorCaller$Origin> implements Serializable {
    static JAVA: AnnotationConstructorCaller$Origin;
    static KOTLIN: AnnotationConstructorCaller$Origin;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AnnotationConstructorCaller$Origin;
    static values(): (Object | null)[];
    private constructor()
    name(): "JAVA" | "KOTLIN";
}