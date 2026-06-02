import type { Class } from '../../java/lang/Class.d.ts'
import type { ValueDescriptor } from '../../jdk/jfr/ValueDescriptor.d.ts'
import type { Type } from '../../jdk/jfr/internal/Type.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AnnotationElement extends Object {
    constructor(arg0: Class<Annotation>)
    constructor(arg0: Class<Annotation>, arg1: Object)
    constructor(arg0: Class<Annotation>, arg1: { [key: string]: Object })
    constructor(arg0: Type, arg1: Object[], arg2: boolean)
    // private annotationValues: Object[];
    // private inBootClassLoader: boolean;
    // private type: Type;
    getAnnotation<A extends Object | number | string | boolean>(arg0: Class<Annotation>): A;
    getAnnotationElements(): AnnotationElement[];
    getType(): Type;
    getTypeId(): number;
    getTypeName(): string;
    getValue(arg0: string): Object;
    getValueDescriptors(): ValueDescriptor[];
    getValues(): Object[];
    hasValue(arg0: string): boolean;
    isInBoot(): boolean;
}