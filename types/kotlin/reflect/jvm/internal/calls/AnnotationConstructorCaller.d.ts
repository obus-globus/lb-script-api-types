import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationConstructorCaller$CallMode } from '../../../../../kotlin/reflect/jvm/internal/calls/AnnotationConstructorCaller$CallMode.d.ts'
import type { AnnotationConstructorCaller$Origin } from '../../../../../kotlin/reflect/jvm/internal/calls/AnnotationConstructorCaller$Origin.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export class AnnotationConstructorCaller extends Object implements Caller<void> {
    constructor(jClass: Class<Object>, parameterNames: string[], callMode: AnnotationConstructorCaller$CallMode, origin: AnnotationConstructorCaller$Origin, methods: Method[])
    // private callMode: AnnotationConstructorCaller$CallMode;
    // private defaultValues: (Object | null)[];
    // private erasedParameterTypes: Class<Object>[];
    // private jClass: Class<Object>;
    readonly member: void | null;
    // private methods: Method[];
    // private parameterNames: string[];
    readonly parameterTypes: Type[];
    readonly returnType: Type;
    call(args: (Object | null)[]): Object | null;
    checkArguments(args: (Object | null)[]): void;
}