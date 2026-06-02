import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class PlatformImplementations$ReflectThrowable extends Object {
    static INSTANCE: PlatformImplementations$ReflectThrowable;
    static addSuppressed: Method;
    static getSuppressed: Method;
    addSuppressed: Method | null;
    getSuppressed: Method | null;
}