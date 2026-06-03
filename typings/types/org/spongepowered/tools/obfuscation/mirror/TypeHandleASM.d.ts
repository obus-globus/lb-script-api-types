import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { ElementKind } from '../../../../../javax/lang/model/element/ElementKind.d.ts'
import type { ExecutableElement } from '../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { PackageElement } from '../../../../../javax/lang/model/element/PackageElement.d.ts'
import type { VariableElement } from '../../../../../javax/lang/model/element/VariableElement.d.ts'
import type { TypeMirror } from '../../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ITargetSelectorByName } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { ITypeHandleProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
import type { FieldHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/FieldHandle.d.ts'
import type { MethodHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class TypeHandleASM extends TypeHandle {
    static of(paramarg0: PackageElement, paramarg1: string, paramarg2: IMixinAnnotationProcessor): TypeHandle;
    constructor(arg0: PackageElement, arg1: string, arg2: ClassNode, arg3: ITypeHandleProvider)
    // private classNode: ClassNode;
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
    getEnclosedElements(): Element[];
    getEnclosedElements(arg0: ElementKind[]): T[];
    getInterfaces(): TypeHandle[];
    getMethods(): MethodHandle[];
    getSuperclass(): TypeHandle;
    getTypeMirror(): TypeMirror;
    hasTypeMirror(): boolean;
    isImaginary(): boolean;
    isNotInterface(): boolean;
    isPublic(): boolean;
}