import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { AbstractProcessor } from '../../../../../../../../javax/annotation/processing/AbstractProcessor.d.ts'
import type { ProcessingEnvironment } from '../../../../../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { RoundEnvironment } from '../../../../../../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { SourceVersion } from '../../../../../../../../javax/lang/model/SourceVersion.d.ts'
import type { Element } from '../../../../../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { VariableElement } from '../../../../../../../../javax/lang/model/element/VariableElement.d.ts'
import type { TypeMirror } from '../../../../../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Annotations } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/Annotations.d.ts'
import type { ReachabilityMetadata$Type } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$Type.d.ts'
export class GraalVmProcessor extends AbstractProcessor {
    constructor()
    // private annotationUtil: Annotations;
    // private processedElements: Element[];
    // private reachableTypes: { [key: string]: ReachabilityMetadata$Type };
    // private addField(parent: TypeElement, element: VariableElement): void;
    // private addMethod(parent: TypeElement, element: ExecutableElement): void;
    getReachabilityMetadataPath(groupId: string, artifactId: string, fallbackFolderName: string): string;
    getSupportedSourceVersion(): SourceVersion;
    init(processingEnv: ProcessingEnvironment): void;
    process(annotations: TypeElement[], roundEnv: RoundEnvironment): boolean;
    // private processConstraintOrVisitor(element: Element, annotation: TypeElement): void;
    // private processFactory(element: Element): void;
    // private processParameter(element: Element): void;
    // private processPlugin(element: Element): void;
    // private safeCast<T extends Element>(element: Element, type: Class<T>): T;
    toString(): string;
    // private toString(element: Element): string;
    // private toString(type: TypeMirror): string;
    // private writeReachabilityMetadata(): void;
}