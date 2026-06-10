import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { IMixinValidator$ValidationPass } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinValidator$ValidationPass.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export interface IMixinValidator extends Object{
    validate(arg0: IMixinValidator$ValidationPass, arg1: TypeElement, arg2: IAnnotationHandle, arg3: TypeHandle[]): boolean;
}