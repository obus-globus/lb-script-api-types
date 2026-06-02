import type { Class } from '../../java/lang/Class.d.ts'
import type { SoftReference } from '../../java/lang/ref/SoftReference.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MethodRef extends Object {
    constructor()
    // private methodRef: SoftReference<Method>;
    // private signature: string;
    // private typeRef: WeakReference<Class<Object>>;
    get(): Method;
    isSet(): boolean;
    set(arg0: Method): void;
}