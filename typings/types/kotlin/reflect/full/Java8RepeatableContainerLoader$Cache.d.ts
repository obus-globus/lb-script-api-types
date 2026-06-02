import type { Class } from '../../../java/lang/Class.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Java8RepeatableContainerLoader$Cache extends Object {
    constructor(repeatableClass: Class<Annotation> | null, valueMethod: Method | null)
    readonly repeatableClass: Class<Annotation> | null;
    readonly valueMethod: Method | null;
}