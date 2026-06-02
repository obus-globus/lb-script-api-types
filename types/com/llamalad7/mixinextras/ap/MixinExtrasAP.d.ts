import type { DefinitionInfo } from '../../../../com/llamalad7/mixinextras/ap/expressions/DefinitionInfo.d.ts'
import type { AbstractProcessor } from '../../../../javax/annotation/processing/AbstractProcessor.d.ts'
import type { RoundEnvironment } from '../../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { SourceVersion } from '../../../../javax/lang/model/SourceVersion.d.ts'
import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
export class MixinExtrasAP extends AbstractProcessor {
    constructor()
    // private definitions: DefinitionInfo[];
    // private gatherDefinitions(arg0: RoundEnvironment): void;
    // private getInjectorAnnotation(arg0: Element): AnnotationHandle;
    getSupportedAnnotationTypes(): string[];
    getSupportedSourceVersion(): SourceVersion;
    process(arg0: TypeElement[], arg1: RoundEnvironment): boolean;
    // private registerDefinition(arg0: Element, arg1: AnnotationHandle): void;
    // private remapDefinitions(): void;
}