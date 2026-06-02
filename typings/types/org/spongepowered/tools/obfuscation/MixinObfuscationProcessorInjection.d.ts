import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RoundEnvironment } from '../../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { MixinObfuscationProcessor } from '../../../../org/spongepowered/tools/obfuscation/MixinObfuscationProcessor.d.ts'
export class MixinObfuscationProcessorInjection extends MixinObfuscationProcessor {
    constructor()
    getSupportedAnnotationTypes(): string[];
    postProcess(arg0: RoundEnvironment): void;
    process(arg0: TypeElement[], arg1: RoundEnvironment): boolean;
    // private processInjectors(arg0: RoundEnvironment, arg1: Class<Annotation>): void;
}