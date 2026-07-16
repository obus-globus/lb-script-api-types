import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KotlinKCallable } from '../../../../kotlin/reflect/jvm/internal/KotlinKCallable.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { KmType } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmValueParameter } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
export class KotlinKCallableKt extends Object {
    static computeParameters(self: KotlinKCallable<Object>, contextParameters: KmValueParameter[], receiverParameterType: KmType | null, valueParameters: KmValueParameter[], typeParameterTable: TypeParameterTable, includeReceivers: boolean): KParameter[];
}