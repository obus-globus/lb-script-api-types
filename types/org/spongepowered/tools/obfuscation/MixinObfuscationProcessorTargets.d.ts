import type { RoundEnvironment } from '../../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { MixinObfuscationProcessor } from '../../../../org/spongepowered/tools/obfuscation/MixinObfuscationProcessor.d.ts'
export class MixinObfuscationProcessorTargets extends MixinObfuscationProcessor {
    constructor()
    postProcess(arg0: RoundEnvironment): void;
    process(arg0: TypeElement[], arg1: RoundEnvironment): boolean;
    // private processAccessors(arg0: RoundEnvironment): void;
    // private processImplements(arg0: RoundEnvironment): void;
    // private processInvokers(arg0: RoundEnvironment): void;
    // private processOverwrites(arg0: RoundEnvironment): void;
    // private processShadows(arg0: RoundEnvironment): void;
}