import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionBase } from '../../../kotlin/jvm/internal/FunctionBase.d.ts'
import type { FunctionReference } from '../../../kotlin/jvm/internal/FunctionReference.d.ts'
import type { Lambda } from '../../../kotlin/jvm/internal/Lambda.d.ts'
import type { MutablePropertyReference0 } from '../../../kotlin/jvm/internal/MutablePropertyReference0.d.ts'
import type { MutablePropertyReference1 } from '../../../kotlin/jvm/internal/MutablePropertyReference1.d.ts'
import type { MutablePropertyReference2 } from '../../../kotlin/jvm/internal/MutablePropertyReference2.d.ts'
import type { PropertyReference0 } from '../../../kotlin/jvm/internal/PropertyReference0.d.ts'
import type { PropertyReference1 } from '../../../kotlin/jvm/internal/PropertyReference1.d.ts'
import type { PropertyReference2 } from '../../../kotlin/jvm/internal/PropertyReference2.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../../kotlin/reflect/KClassifier.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { KMutableProperty0 } from '../../../kotlin/reflect/KMutableProperty0.d.ts'
import type { KMutableProperty1 } from '../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { KMutableProperty2 } from '../../../kotlin/reflect/KMutableProperty2.d.ts'
import type { KProperty0 } from '../../../kotlin/reflect/KProperty0.d.ts'
import type { KProperty1 } from '../../../kotlin/reflect/KProperty1.d.ts'
import type { KProperty2 } from '../../../kotlin/reflect/KProperty2.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KTypeProjection } from '../../../kotlin/reflect/KTypeProjection.d.ts'
import type { KVariance } from '../../../kotlin/reflect/KVariance.d.ts'
export class Reflection extends Object {
    static createKotlinClass(paramarg0: Class<Object>): KClass<Object>;
    static createKotlinClass(paramarg0: Class<Object>, paramarg1: string): KClass<Object>;
    static function(paramarg0: FunctionReference): KFunction<Object>;
    static getOrCreateKotlinClass(paramarg0: Class<Object>): KClass<Object>;
    static getOrCreateKotlinClass(paramarg0: Class<Object>, paramarg1: string): KClass<Object>;
    static getOrCreateKotlinClasses(paramarg0: (Object | null)[]): (Object | null)[];
    static getOrCreateKotlinPackage(paramarg0: Class<Object>): KDeclarationContainer;
    static getOrCreateKotlinPackage(paramarg0: Class<Object>, paramarg1: string): KDeclarationContainer;
    static mutableCollectionType(paramarg0: KType): KType;
    static mutableProperty0(paramarg0: MutablePropertyReference0): KMutableProperty0<Object>;
    static mutableProperty1(paramarg0: MutablePropertyReference1): KMutableProperty1<Object, Object>;
    static mutableProperty2(paramarg0: MutablePropertyReference2): KMutableProperty2<Object, Object, Object>;
    static nothingType(paramarg0: KType): KType;
    static nullableTypeOf(paramarg0: Class<Object>): KType;
    static nullableTypeOf(paramarg0: Class<Object>, paramarg1: KTypeProjection): KType;
    static nullableTypeOf(paramarg0: Class<Object>, paramarg1: KTypeProjection, paramarg2: KTypeProjection): KType;
    static nullableTypeOf(paramarg0: Class<Object>, ...paramarg1: (Object | null)[]): KType;
    static nullableTypeOf(paramarg0: KClassifier): KType;
    static platformType(paramarg0: KType, paramarg1: KType): KType;
    static property0(paramarg0: PropertyReference0): KProperty0<Object>;
    static property1(paramarg0: PropertyReference1): KProperty1<Object, Object>;
    static property2(paramarg0: PropertyReference2): KProperty2<Object, Object, Object>;
    static renderLambdaToString(paramarg0: FunctionBase<Object>): string;
    static renderLambdaToString(paramarg0: Lambda<Object>): string;
    static setUpperBounds(paramarg0: KTypeParameter, paramarg1: KType): void;
    static setUpperBounds(paramarg0: KTypeParameter, ...paramarg1: (Object | null)[]): void;
    static typeOf(paramarg0: Class<Object>): KType;
    static typeOf(paramarg0: Class<Object>, paramarg1: KTypeProjection): KType;
    static typeOf(paramarg0: Class<Object>, paramarg1: KTypeProjection, paramarg2: KTypeProjection): KType;
    static typeOf(paramarg0: Class<Object>, ...paramarg1: (Object | null)[]): KType;
    static typeOf(paramarg0: KClassifier): KType;
    static typeParameter(paramarg0: Object, paramarg1: string, paramarg2: KVariance, paramarg3: boolean): KTypeParameter;
    constructor()
}