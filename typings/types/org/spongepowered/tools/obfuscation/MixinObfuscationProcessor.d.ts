import type { AbstractProcessor } from '../../../../javax/annotation/processing/AbstractProcessor.d.ts'
import type { ProcessingEnvironment } from '../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { RoundEnvironment } from '../../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { SourceVersion } from '../../../../javax/lang/model/SourceVersion.d.ts'
import type { AnnotatedMixins } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixins.d.ts'
export abstract class MixinObfuscationProcessor extends AbstractProcessor {
    constructor()
    // private mixins: AnnotatedMixins;
    getSupportedOptions(): string[];
    getSupportedSourceVersion(): SourceVersion;
    init(arg0: ProcessingEnvironment): void;
    postProcess(arg0: RoundEnvironment): void;
    processMixins(arg0: RoundEnvironment): void;
}