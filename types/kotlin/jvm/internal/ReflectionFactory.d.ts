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
export class ReflectionFactory extends Object {
    constructor()
    createKotlinClass(arg0: Class<Object>): KClass<Object>;
    createKotlinClass(arg0: Class<Object>, arg1: string): KClass<Object>;
    function(arg0: FunctionReference): KFunction<Object>;
    getOrCreateKotlinClass(arg0: Class<Object>): KClass<Object>;
    getOrCreateKotlinClass(arg0: Class<Object>, arg1: string): KClass<Object>;
    getOrCreateKotlinPackage(arg0: Class<Object>, arg1: string): KDeclarationContainer;
    mutableCollectionType(arg0: KType): KType;
    mutableProperty0(arg0: MutablePropertyReference0): KMutableProperty0<Object>;
    mutableProperty1(arg0: MutablePropertyReference1): KMutableProperty1<Object, Object>;
    mutableProperty2(arg0: MutablePropertyReference2): KMutableProperty2<Object, Object, Object>;
    nothingType(arg0: KType): KType;
    platformType(arg0: KType, arg1: KType): KType;
    property0(arg0: PropertyReference0): KProperty0<Object>;
    property1(arg0: PropertyReference1): KProperty1<Object, Object>;
    property2(arg0: PropertyReference2): KProperty2<Object, Object, Object>;
    renderLambdaToString(arg0: FunctionBase<Object>): string;
    renderLambdaToString(arg0: Lambda<Object>): string;
    setUpperBounds(arg0: KTypeParameter, arg1: KType[]): void;
    typeOf(arg0: KClassifier, arg1: KTypeProjection[], arg2: boolean): KType;
    typeParameter(arg0: Object, arg1: string, arg2: KVariance, arg3: boolean): KTypeParameter;
}