import type { AbstractProcessor } from '../../../../../../../../javax/annotation/processing/AbstractProcessor.d.ts'
import type { ProcessingEnvironment } from '../../../../../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { RoundEnvironment } from '../../../../../../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { SourceVersion } from '../../../../../../../../javax/lang/model/SourceVersion.d.ts'
import type { Element } from '../../../../../../../../javax/lang/model/element/Element.d.ts'
import type { TypeElement } from '../../../../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { VariableElement } from '../../../../../../../../javax/lang/model/element/VariableElement.d.ts'
import type { Diagnostic$Kind } from '../../../../../../../../javax/tools/Diagnostic$Kind.d.ts'
import type { PluginCache } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/PluginCache.d.ts'
export class PluginProcessor extends AbstractProcessor {
    static PLUGIN_CACHE_FILE: string;
    constructor()
    // private minAllowedMessageKind: Diagnostic$Kind;
    // private pluginCache: PluginCache;
    // private processedElements: Element[];
    // private collectPlugins(elements: Element[]): void;
    getSupportedSourceVersion(): SourceVersion;
    init(processingEnv: ProcessingEnvironment): void;
    // private printMessage(kind: Diagnostic$Kind, message: string): void;
    // private printMessage(kind: Diagnostic$Kind, message: string, element: Element): void;
    process(annotations: TypeElement[], roundEnv: RoundEnvironment): boolean;
    // private processBuilderAttribute(element: VariableElement): void;
    // private processBuilderAttribute(elements: Element[]): void;
    // private writeCacheFile(...elements: Element[]): void;
}