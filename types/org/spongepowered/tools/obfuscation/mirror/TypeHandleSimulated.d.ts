import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { PackageElement } from '../../../../../javax/lang/model/element/PackageElement.d.ts'
import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { TypeMirror } from '../../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { ITargetSelectorByName } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
import type { MappingMethod } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { ITypeHandleProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
import type { AnnotationHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { FieldHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/FieldHandle.d.ts'
import type { MethodHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class TypeHandleSimulated extends TypeHandle {
    constructor(arg0: PackageElement, arg1: string, arg2: TypeMirror, arg3: ITypeHandleProvider)
    constructor(arg0: string, arg1: TypeMirror, arg2: ITypeHandleProvider)
    // private simulatedType: TypeElement;
    findDescriptor(arg0: ITargetSelectorByName): string;
    findField(arg0: string, arg1: string, arg2: boolean): FieldHandle;
    findMethod(arg0: string, arg1: string, arg2: boolean): MethodHandle;
    getAnnotation(arg0: Class<Annotation>): AnnotationHandle;
    getMappingMethod(arg0: string, arg1: string): MappingMethod;
    getSuperclass(): TypeHandle;
    getTargetElement(): TypeElement;
    isImaginary(): boolean;
    isPublic(): boolean;
    isSimulated(): boolean;
}