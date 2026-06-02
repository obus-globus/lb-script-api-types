import type { AnnotationMirror } from '../../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { ExecutableElement } from '../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { DeclaredType } from '../../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefinitionInfo$SyntheticAt extends Object implements AnnotationMirror {
    constructor(null_: DefinitionInfo$SyntheticAt, arg1: string, arg2: string, arg3: boolean)
    // private atType: DeclaredType;
    readonly elementValues: Map<ExecutableElement, AnnotationValue>;
    // private remap: boolean;
    // private target: string;
    // private type: string;
    getAnnotationType(): DeclaredType;
    // private getAtMethod(arg0: string): ExecutableElement;
    getElementValues(): Map<ExecutableElement, AnnotationValue>;
    // private makeBooleanConstant(arg0: boolean): AnnotationValue;
    // private makeElementValues(): Map<ExecutableElement, AnnotationValue>;
    // private makeStringConstant(arg0: string): AnnotationValue;
}