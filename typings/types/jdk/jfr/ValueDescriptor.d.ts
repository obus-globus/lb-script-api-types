import type { Class } from '../../java/lang/Class.d.ts'
import type { AnnotationElement } from '../../jdk/jfr/AnnotationElement.d.ts'
import type { AnnotationConstruct } from '../../jdk/jfr/internal/AnnotationConstruct.d.ts'
import type { Type } from '../../jdk/jfr/internal/Type.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ValueDescriptor extends Object {
    constructor(arg0: Class<Object>, arg1: string)
    constructor(arg0: Class<Object>, arg1: string, arg2: AnnotationElement[])
    constructor(arg0: Class<Object>, arg1: string, arg2: AnnotationElement[], arg3: boolean)
    constructor(arg0: Type, arg1: string, arg2: AnnotationElement[], arg3: number, arg4: boolean, arg5: string)
    // private annotationConstruct: AnnotationConstruct;
    // private constantPool: boolean;
    readonly contentType: string;
    // private isArray: boolean;
    // private javaFieldName: string;
    readonly label: string;
    readonly name: string;
    // private type: Type;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotationElements(): AnnotationElement[];
    getContentType(): string;
    getDescription(): string;
    getFields(): ValueDescriptor[];
    getJavaFieldName(): string;
    getLabel(): string;
    getName(): string;
    getType(): Type;
    getTypeId(): number;
    getTypeName(): string;
    isArray(): boolean;
    isConstantPool(): boolean;
    isUnsigned(): boolean;
    setAnnotations(arg0: AnnotationElement[]): void;
}