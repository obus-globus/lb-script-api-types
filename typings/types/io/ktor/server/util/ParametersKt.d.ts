import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../kotlin/reflect/KProperty.d.ts'
export class ParametersKt extends Object {
    static getOrFail<R extends unknown>(self: Parameters, name: string): R;
    static getOrFail(self: Parameters, name: string): string;
    static getOrFailImpl<R extends unknown>(self: Parameters, name: string, typeInfo: TypeInfo): R;
    static getValue<R extends unknown>(self: Parameters, thisRef: Object | null, property: KProperty<Object>): R;
}