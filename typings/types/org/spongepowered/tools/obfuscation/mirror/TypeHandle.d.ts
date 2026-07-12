import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { ElementKind } from '../../../../../javax/lang/model/element/ElementKind.d.ts'
import type { ExecutableElement } from '../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { PackageElement } from '../../../../../javax/lang/model/element/PackageElement.d.ts'
import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { VariableElement } from '../../../../../javax/lang/model/element/VariableElement.d.ts'
import type { DeclaredType } from '../../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { TypeMirror } from '../../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ITargetSelectorByName } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
import type { MappingMethod } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { ITypeHandleProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
import type { FieldHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/FieldHandle.d.ts'
import type { MethodHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
import type { TypeReference } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeReference.d.ts'
export class TypeHandle extends Object {
    constructor(arg0: PackageElement, arg1: string, arg2: ITypeHandleProvider)
    constructor(arg0: TypeElement, arg1: ITypeHandleProvider)
    constructor(arg0: DeclaredType, arg1: ITypeHandleProvider)
    readonly element: TypeElement;
    readonly name: string;
    // private pkg: PackageElement;
    readonly reference: TypeReference;
    // private typeProvider: ITypeHandleProvider;
    findDescriptor(arg0: ITargetSelectorByName): string;
    findField(arg0: VariableElement): FieldHandle;
    findField(arg0: VariableElement, arg1: boolean): FieldHandle;
    findField(arg0: string, arg1: string): FieldHandle;
    findField(arg0: string, arg1: string, arg2: boolean): FieldHandle;
    findMethod(arg0: ExecutableElement): MethodHandle;
    findMethod(arg0: ExecutableElement, arg1: boolean): MethodHandle;
    findMethod(arg0: string, arg1: string): MethodHandle;
    findMethod(arg0: string, arg1: string, arg2: boolean): MethodHandle;
    getAnnotation(arg0: Class<Annotation>): IAnnotationHandle;
    getElement(): TypeElement;
    getEnclosedElements(): Element[];
    getEnclosedElements<T extends Element>(...arg0: ElementKind[]): T[];
    getInterfaces(): TypeHandle[];
    getMappingMethod(arg0: string, arg1: string): MappingMethod;
    getMethods(): MethodHandle[];
    getName(): string;
    getPackage(): PackageElement;
    getReference(): TypeReference;
    getSimpleName(): string;
    getSuperclass(): TypeHandle;
    getTargetElement(): TypeElement;
    getTypeMirror(): TypeMirror;
    hasTypeMirror(): boolean;
    isImaginary(): boolean;
    isNotInterface(): boolean;
    isPublic(): boolean;
    isSimulated(): boolean;
    isSuperTypeOf(arg0: TypeHandle): boolean;
    toString(): string;
}