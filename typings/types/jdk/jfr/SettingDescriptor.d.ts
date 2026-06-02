import type { Class } from '../../java/lang/Class.d.ts'
import type { AnnotationElement } from '../../jdk/jfr/AnnotationElement.d.ts'
import type { AnnotationConstruct } from '../../jdk/jfr/internal/AnnotationConstruct.d.ts'
import type { Type } from '../../jdk/jfr/internal/Type.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SettingDescriptor extends Object {
    constructor(arg0: Type, arg1: string, arg2: string, arg3: AnnotationElement[])
    // private annotationConstruct: AnnotationConstruct;
    readonly defaultValue: string;
    readonly name: string;
    // private type: Type;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotationElements(): AnnotationElement[];
    getContentType(): string;
    getDefaultValue(): string;
    getDescription(): string;
    getLabel(): string;
    getName(): string;
    getType(): Type;
    getTypeId(): number;
    getTypeName(): string;
    setAnnotations(arg0: AnnotationElement[]): void;
}