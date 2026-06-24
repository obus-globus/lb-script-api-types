import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter$Kind } from '../../../../kotlin/reflect/KParameter$Kind.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KotlinKCallable } from '../../../../kotlin/reflect/jvm/internal/KotlinKCallable.d.ts'
import type { ReflectKParameter } from '../../../../kotlin/reflect/jvm/internal/ReflectKParameter.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { KmValueParameter } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
export class KotlinKParameter extends ReflectKParameter {
    constructor(callable: KotlinKCallable<Object>, kmParameter: KmValueParameter, index: number, kind: KParameter$Kind, typeParameterTable: TypeParameterTable)
    readonly callable: KotlinKCallable<Object>;
    readonly declaresDefaultValue: boolean;
    readonly index: number;
    /*not mapped: */ isOptional(): boolean;
    /*not mapped: */ isVararg(): boolean;
    readonly kind: KParameter$Kind;
    // private kmParameter: KmValueParameter;
    /*not mapped: */ getKmParameter$kotlin_reflection(): KmValueParameter;
    readonly name: string | null;
    readonly type: KType;
}