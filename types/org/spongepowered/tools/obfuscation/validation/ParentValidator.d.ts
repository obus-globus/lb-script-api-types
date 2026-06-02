import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { MixinValidator } from '../../../../../org/spongepowered/tools/obfuscation/MixinValidator.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
export class ParentValidator extends MixinValidator {
    constructor(arg0: IMixinAnnotationProcessor)
    validate(arg0: TypeElement, arg1: IAnnotationHandle, arg2: E[]): boolean;
}