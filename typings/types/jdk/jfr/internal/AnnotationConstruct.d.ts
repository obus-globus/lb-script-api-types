import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotationElement } from '../../../jdk/jfr/AnnotationElement.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AnnotationConstruct extends Object {
    constructor()
    constructor(arg0: AnnotationElement[])
    readonly annotationElements: AnnotationElement[];
    // private unsignedFlag: number;
    getAnnotation<T extends Object | number | string | boolean>(arg0: Class<Annotation>): T;
    getAnnotationElement(arg0: Class<Annotation>): AnnotationElement;
    getAnnotationValue<T extends Object | number | string | boolean>(arg0: Class<Annotation>, arg1: T): T;
    getDescription(): string;
    getLabel(): string;
    getUnmodifiableAnnotationElements(): AnnotationElement[];
    hasUnsigned(): boolean;
    setAnnotationElements(arg0: AnnotationElement[]): void;
}