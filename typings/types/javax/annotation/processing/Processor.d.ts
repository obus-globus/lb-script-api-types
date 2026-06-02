import type { Completion } from '../../../javax/annotation/processing/Completion.d.ts'
import type { ProcessingEnvironment } from '../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { RoundEnvironment } from '../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { SourceVersion } from '../../../javax/lang/model/SourceVersion.d.ts'
import type { AnnotationMirror } from '../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { Element } from '../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Processor extends Object{
    getCompletions(arg0: Element, arg1: AnnotationMirror, arg2: ExecutableElement, arg3: string): Completion[];
    getSupportedAnnotationTypes(): string[];
    getSupportedOptions(): string[];
    getSupportedSourceVersion(): SourceVersion;
    init(arg0: ProcessingEnvironment): void;
    process(arg0: TypeElement[], arg1: RoundEnvironment): boolean;
}