import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AnnotationValue } from '../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { DeclaredType } from '../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AnnotationMirror extends Object{
    getAnnotationType(): DeclaredType;
    getElementValues(): JavaMap<ExecutableElement, AnnotationValue>;
}