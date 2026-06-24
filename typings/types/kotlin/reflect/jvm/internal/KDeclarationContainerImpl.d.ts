import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassBasedDeclarationContainer } from '../../../../kotlin/jvm/internal/ClassBasedDeclarationContainer.d.ts'
import type { KProperty0 } from '../../../../kotlin/reflect/KProperty0.d.ts'
import type { KDeclarationContainerImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Companion.d.ts'
import type { ConstructorDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { KmConstructor } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { Regex } from '../../../../kotlin/text/Regex.d.ts'
export abstract class KDeclarationContainerImpl extends Object implements ClassBasedDeclarationContainer {
    static Companion: KDeclarationContainerImpl$Companion;
    static LOCAL_PROPERTY_SIGNATURE: Regex;
    constructor()
    // private addParametersAndMasks(result: Class<Object>[], parameters: Class<Object>[], isConstructor: boolean, hasExtensionParameter: boolean): void;
    createLocalProperty(index: number, signature: string): KProperty0<Object> | null;
    findConstructorBySignature(desc: string): Constructor<Object> | null;
    findConstructorMetadata(signature: string): KmConstructor;
    findDefaultConstructor(desc: string): Constructor<Object> | null;
    findDefaultMethod(name: string, desc: string, isMember: boolean, hasExtensionParameter: boolean): Method | null;
    findFunctionDescriptor(name: string, signature: string): FunctionDescriptor;
    findFunctionMetadata(name: string, signature: string): KmFunction;
    findJavaConstructor(signature: string): Constructor<Object>;
    findJavaField(name: string): Field;
    findJavaMethod(name: string, nameAndDesc: string): Method;
    findMethodBySignature(name: string, desc: string): Method | null;
    findPropertyDescriptor(name: string, signature: string): PropertyDescriptor;
    findPropertyMetadata(name: string, signature: string): KmProperty;
    getFunctions(name: Name): FunctionDescriptor[];
    getLocalPropertyDescriptor(index: number): PropertyDescriptor | null;
    getLocalPropertyMetadata(index: number): KmProperty | null;
    getProperties(name: Name): PropertyDescriptor[];
}