import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export class ConversionServiceJvmKt extends Object {
    static platformDefaultFromValues(value: string, klass: KClass<Object>): Object | null;
    static platformDefaultToValues(value: Object): string[] | null;
}