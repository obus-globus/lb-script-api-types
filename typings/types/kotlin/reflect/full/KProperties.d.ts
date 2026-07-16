import type { Object } from '../../../java/lang/Object.d.ts'
import type { KProperty1 } from '../../../kotlin/reflect/KProperty1.d.ts'
import type { KProperty2 } from '../../../kotlin/reflect/KProperty2.d.ts'
export class KProperties extends Object {
    static getExtensionDelegate<D extends unknown>(self: KProperty2<D, Object, Object>, receiver: D): Object | null;
    static getExtensionDelegate(self: KProperty1<Object, Object>): Object | null;
}