import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AnnotationConstructorCaller$Origin extends Enum<AnnotationConstructorCaller$Origin> implements Serializable {
    static JAVA: AnnotationConstructorCaller$Origin;
    static KOTLIN: AnnotationConstructorCaller$Origin;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AnnotationConstructorCaller$Origin;
    static values(): AnnotationConstructorCaller$Origin[];
    private constructor()
    name(): "JAVA" | "KOTLIN";
}