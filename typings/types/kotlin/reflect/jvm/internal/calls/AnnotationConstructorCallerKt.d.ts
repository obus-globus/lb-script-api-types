import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AnnotationConstructorCallerKt extends Object {
    static createAnnotationInstance<T extends unknown>(annotationClass: Class<T>, values: JavaMap<string, Object>, methods: Method[]): T;
}