import type { Completion } from '../../../javax/annotation/processing/Completion.d.ts'
import type { ProcessingEnvironment } from '../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { Processor } from '../../../javax/annotation/processing/Processor.d.ts'
import type { RoundEnvironment } from '../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { SourceVersion } from '../../../javax/lang/model/SourceVersion.d.ts'
import type { AnnotationMirror } from '../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { Element } from '../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractProcessor extends Object implements Processor {
    constructor()
    // private initialized: boolean;
    // private processingEnv: ProcessingEnvironment;
    // private arrayToSet(arg0: string[], arg1: boolean, arg2: string, arg3: string): string[];
    getCompletions(arg0: Element, arg1: AnnotationMirror, arg2: ExecutableElement, arg3: string): Completion[];
    getSupportedAnnotationTypes(): string[];
    getSupportedOptions(): string[];
    getSupportedSourceVersion(): SourceVersion;
    init(arg0: ProcessingEnvironment): void;
    isInitialized(): boolean;
    process(arg0: TypeElement[], arg1: RoundEnvironment): boolean;
}