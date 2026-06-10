import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { MixinValidator } from '../../../../../org/spongepowered/tools/obfuscation/MixinValidator.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IMixinValidator$ValidationPass } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinValidator$ValidationPass.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class TargetValidator extends MixinValidator {
    constructor(arg0: IMixinAnnotationProcessor)
    // private checkMixinsFor(arg0: TypeHandle, arg1: TypeHandle): boolean;
    validate(arg0: TypeElement, arg1: IAnnotationHandle, arg2: TypeHandle[]): boolean;
    validate(arg0: IMixinValidator$ValidationPass, arg1: TypeElement, arg2: IAnnotationHandle, arg3: TypeHandle[]): boolean;
    // private validateClassMixin(arg0: TypeElement, arg1: TypeHandle[]): void;
    // private validateInterfaceMixin(arg0: TypeElement, arg1: TypeHandle[]): void;
    // private validateSuperClass(arg0: TypeHandle, arg1: TypeHandle): boolean;
}