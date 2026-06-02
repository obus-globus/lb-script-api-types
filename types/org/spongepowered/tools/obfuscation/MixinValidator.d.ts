import type { ProcessingEnvironment } from '../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IAnnotationHandle } from '../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { IMessagerSuppressible } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerSuppressible.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IMixinValidator } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinValidator.d.ts'
import type { IMixinValidator$ValidationPass } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinValidator$ValidationPass.d.ts'
import type { IOptionProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IOptionProvider.d.ts'
import type { ITypeHandleProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export abstract class MixinValidator extends Object implements IMixinValidator {
    constructor(arg0: IMixinAnnotationProcessor, arg1: IMixinValidator$ValidationPass)
    // private messager: IMessagerSuppressible;
    // private options: IOptionProvider;
    // private pass: IMixinValidator$ValidationPass;
    // private processingEnv: ProcessingEnvironment;
    // private typeHandleProvider: ITypeHandleProvider;
    getMixinsTargeting(arg0: TypeHandle): E[];
    validate(arg0: TypeElement, arg1: IAnnotationHandle, arg2: E[]): boolean;
    validate(arg0: IMixinValidator$ValidationPass, arg1: TypeElement, arg2: IAnnotationHandle, arg3: E[]): boolean;
}