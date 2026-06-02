import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { KParameter } from '../../../kotlin/reflect/KParameter.d.ts'
import type { KProperty } from '../../../kotlin/reflect/KProperty.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export interface ClassTransformer extends Object{
    transformFunctionList(functions: KFunction<Object>[], klass: KClass<Object>): KFunction<Object>[];
    transformFunctionName(functionName: string, function_: KFunction<Object>, klass: KClass<Object>): string;
    transformFunctionParameterType(type: KType, parameter: KParameter, function_: KFunction<Object>, klass: KClass<Object>): KType;
    transformFunctionReturnType(type: KType, function_: KFunction<Object>, klass: KClass<Object>): KType;
    transformPropertyList(properties: KProperty<Object>[], klass: KClass<Object>): KProperty<Object>[];
    transformPropertyName(propertyName: string, property: KProperty<Object>, klass: KClass<Object>): string;
    transformPropertyType(type: KType, property: KProperty<Object>, klass: KClass<Object>): KType;
}