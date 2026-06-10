import type { Class } from '../../../java/lang/Class.d.ts'
import type { RetentionPolicy } from '../../../java/lang/annotation/RetentionPolicy.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AnnotationType extends Object {
    static getInstance(paramarg0: Class<Annotation>): AnnotationType;
    static invocationHandlerReturnType(paramarg0: Class<Object>): Class<Object>;
    private constructor(arg0: Class<Annotation>)
    readonly inherited: boolean;
    // private memberDefaults: { [key: string]: Object };
    // private memberTypes: { [key: string]: Class<Object> };
    // private members: { [key: string]: Method };
    // private retention: RetentionPolicy;
    isInherited(): boolean;
    memberDefaults(): { [key: string]: Object };
    memberTypes(): { [key: string]: Class<Object> };
    members(): { [key: string]: Method };
    retention(): RetentionPolicy;
    toString(): string;
}