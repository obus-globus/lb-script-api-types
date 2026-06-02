import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassBasedDeclarationContainer } from '../../../../kotlin/jvm/internal/ClassBasedDeclarationContainer.d.ts'
import type { KDeclarationContainerImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$Companion.d.ts'
import type { KDeclarationContainerImpl$FunctionJvmDescriptor } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl$FunctionJvmDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { Name } from '../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export abstract class KDeclarationContainerImpl extends Object implements ClassBasedDeclarationContainer {
    static Companion: KDeclarationContainerImpl$Companion;
    constructor()
    readonly constructorDescriptors: E[];
    // private /*not mapped: */ getMethodOwner(): Class<Object>;
    // private addParametersAndMasks(result: Class<Object>[], valueParameters: Class<Object>[], isConstructor: boolean): void;
    findConstructorBySignature(desc: string): Constructor<Object> | null;
    findDefaultConstructor(desc: string): Constructor<Object> | null;
    findDefaultMethod(name: string, desc: string, isMember: boolean): Method | null;
    findFunctionDescriptor(name: string, signature: string): FunctionDescriptor;
    findMethodBySignature(name: string, desc: string): Method | null;
    findPropertyDescriptor(name: string, signature: string): PropertyDescriptor;
    getFunctions(name: Name): E[];
    getLocalProperty(index: number): PropertyDescriptor | null;
    getProperties(name: Name): E[];
    // private parseJvmDescriptor(desc: string, parseReturnType: boolean): KDeclarationContainerImpl$FunctionJvmDescriptor;
    // private parseType(desc: string, begin: number, end: number): Class<Object>;
}