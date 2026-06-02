import type { Class } from '../../../java/lang/Class.d.ts'
import type { Element } from '../../../javax/lang/model/element/Element.d.ts'
import type { TypeElement } from '../../../javax/lang/model/element/TypeElement.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RoundEnvironment extends Object{
    errorRaised(): boolean;
    getElementsAnnotatedWith(arg0: Class<Annotation>): Element[];
    getElementsAnnotatedWith(arg0: TypeElement): Element[];
    getElementsAnnotatedWithAny(arg0: TypeElement[]): Element[];
    getElementsAnnotatedWithAny(arg0: Class<Annotation>[]): Element[];
    getRootElements(): Element[];
    processingOver(): boolean;
}