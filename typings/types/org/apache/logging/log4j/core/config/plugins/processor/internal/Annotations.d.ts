import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Element } from '../../../../../../../../../javax/lang/model/element/Element.d.ts'
import type { TypeElement } from '../../../../../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Elements } from '../../../../../../../../../javax/lang/model/util/Elements.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../../java/lang/CharSequence.d.ts'
import type { Annotations$Type } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/Annotations$Type.d.ts'
export class Annotations extends Object {
    constructor(elements: Elements)
    // private typeElementToTypeMap: JavaMap<TypeElement, Annotations$Type>;
    // private addTypeElementIfExists(elements: Elements, className: CharSequence, type: Annotations$Type): void;
    classifyAnnotation(element: TypeElement): Annotations$Type;
    getAnnotationClassValue(element: Element, annotation: TypeElement): Element;
}