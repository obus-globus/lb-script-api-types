import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AnnotationConstructorCaller$CallMode extends Enum<AnnotationConstructorCaller$CallMode> implements Serializable {
    static CALL_BY_NAME: AnnotationConstructorCaller$CallMode;
    static POSITIONAL_CALL: AnnotationConstructorCaller$CallMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AnnotationConstructorCaller$CallMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "CALL_BY_NAME" | "POSITIONAL_CALL";
}