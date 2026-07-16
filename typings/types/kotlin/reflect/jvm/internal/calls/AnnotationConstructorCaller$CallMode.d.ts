import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AnnotationConstructorCaller$CallMode extends Enum<AnnotationConstructorCaller$CallMode> implements Serializable {
    static CALL_BY_NAME: AnnotationConstructorCaller$CallMode;
    static POSITIONAL_CALL: AnnotationConstructorCaller$CallMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AnnotationConstructorCaller$CallMode;
    static values(): AnnotationConstructorCaller$CallMode[];
    private constructor()
    name(): "CALL_BY_NAME" | "POSITIONAL_CALL";
}