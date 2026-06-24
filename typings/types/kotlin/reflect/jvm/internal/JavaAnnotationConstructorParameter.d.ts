import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { KParameter$Kind } from '../../../../kotlin/reflect/KParameter$Kind.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { JavaAnnotationConstructor } from '../../../../kotlin/reflect/jvm/internal/JavaAnnotationConstructor.d.ts'
import type { ReflectKParameter } from '../../../../kotlin/reflect/jvm/internal/ReflectKParameter.d.ts'
export class JavaAnnotationConstructorParameter extends ReflectKParameter {
    constructor(callable: JavaAnnotationConstructor, method: Method, index: number)
    readonly annotations: Annotation[];
    readonly callable: JavaAnnotationConstructor;
    readonly declaresDefaultValue: boolean;
    readonly index: number;
    /*not mapped: */ isOptional(): boolean;
    /*not mapped: */ isVararg(): boolean;
    readonly kind: KParameter$Kind;
    // private method: Method;
    readonly name: string;
    readonly type: KType;
}