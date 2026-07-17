import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DefinitionInfo } from '../../../../../com/llamalad7/mixinextras/ap/expressions/DefinitionInfo.d.ts'
import type { AnnotationMirror } from '../../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { ExecutableElement } from '../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { DeclaredType } from '../../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefinitionInfo$SyntheticAt extends Object implements AnnotationMirror {
    constructor(null_: DefinitionInfo, arg1: string, arg2: string, arg3: boolean)
    // private atType: DeclaredType;
    readonly elementValues: JavaMap<ExecutableElement, AnnotationValue>;
    // private remap: boolean;
    // private target: string;
    // private type: string;
    getAnnotationType(): DeclaredType;
    // private getAtMethod(arg0: string): ExecutableElement;
    getElementValues(): JavaMap<ExecutableElement, AnnotationValue>;
    // private makeBooleanConstant(arg0: boolean): AnnotationValue;
    // private makeElementValues(): JavaMap<ExecutableElement, AnnotationValue>;
    // private makeStringConstant(arg0: string): AnnotationValue;
}