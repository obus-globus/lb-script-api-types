import type { ReflectionHelper$RecordHelper } from '../../../../../com/google/gson/internal/reflect/ReflectionHelper$RecordHelper.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectionHelper$RecordSupportedHelper extends ReflectionHelper$RecordHelper {
    private constructor()
    // private getName: Method;
    // private getRecordComponents: Method;
    // private getType: Method;
    // private isRecord: Method;
    getAccessor(arg0: Class<Object>, arg1: Field): Method;
    getCanonicalRecordConstructor(arg0: Class<T>): Constructor<T>;
    getRecordComponentNames(arg0: Class<Object>): string[];
    isRecord(arg0: Class<Object>): boolean;
}