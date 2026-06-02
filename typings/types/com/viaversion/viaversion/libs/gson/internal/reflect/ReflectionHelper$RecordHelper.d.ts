import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ReflectionHelper$RecordHelper extends Object {
    private constructor()
    getAccessor(arg0: Class<Object>, arg1: Field): Method;
    getCanonicalRecordConstructor(arg0: Class<T>): Constructor<T>;
    getRecordComponentNames(arg0: Class<Object>): string[];
    isRecord(arg0: Class<Object>): boolean;
}