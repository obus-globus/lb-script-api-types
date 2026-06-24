import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KParameter$Kind } from '../../../../kotlin/reflect/KParameter$Kind.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectKParameter } from '../../../../kotlin/reflect/jvm/internal/ReflectKParameter.d.ts'
export class InstanceParameter extends ReflectKParameter {
    constructor(callable: ReflectKCallable<Object>, klass: KClass<Object>)
    readonly annotations: Annotation[];
    readonly callable: ReflectKCallable<Object>;
    readonly declaresDefaultValue: boolean;
    readonly index: number;
    /*not mapped: */ isOptional(): boolean;
    /*not mapped: */ isVararg(): boolean;
    readonly kind: KParameter$Kind;
    readonly name: string | null;
    readonly type: KType;
}