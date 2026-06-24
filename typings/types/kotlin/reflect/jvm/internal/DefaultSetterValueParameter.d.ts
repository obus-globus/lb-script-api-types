import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter$Kind } from '../../../../kotlin/reflect/KParameter$Kind.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectKParameter } from '../../../../kotlin/reflect/jvm/internal/ReflectKParameter.d.ts'
import type { ReflectKProperty } from '../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
export class DefaultSetterValueParameter extends ReflectKParameter {
    constructor(property: ReflectKProperty<Object>)
    readonly annotations: Annotation[];
    readonly callable: ReflectKCallable<Object>;
    readonly declaresDefaultValue: boolean;
    readonly index: number;
    /*not mapped: */ isOptional(): boolean;
    /*not mapped: */ isVararg(): boolean;
    readonly kind: KParameter$Kind;
    readonly name: string | null;
    // private property: ReflectKProperty<Object>;
    readonly type: KType;
}