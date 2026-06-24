import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter$Kind } from '../../../../kotlin/reflect/KParameter$Kind.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { JavaKCallable } from '../../../../kotlin/reflect/jvm/internal/JavaKCallable.d.ts'
import type { ReflectKParameter } from '../../../../kotlin/reflect/jvm/internal/ReflectKParameter.d.ts'
export class JavaKParameter extends ReflectKParameter {
    constructor(callable: JavaKCallable<Object>, name: string | null, type: KType, index: number, kind: KParameter$Kind, isVararg: boolean)
    readonly callable: JavaKCallable<Object>;
    readonly declaresDefaultValue: boolean;
    readonly index: number;
    /*not mapped: */ isOptional(): boolean;
    // private isVararg: boolean;
    /*not mapped: */ isVararg(): boolean;
    readonly kind: KParameter$Kind;
    readonly name: string | null;
    readonly type: KType;
}