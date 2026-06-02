import type { PhantomReference } from '../../../java/lang/ref/PhantomReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HSObject } from '../../../org/graalvm/jniutils/HSObject.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
export class HSObject$Cleaner extends PhantomReference<HSObject> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: HSObject, handle: JNI$JObject, allowGlobalDuplicates: boolean, weak: boolean)
    // private allowGlobalDuplicates: boolean;
    // private handle: JNI$JObject;
    // private weak: boolean;
    clean(env: JNI$JNIEnv): void;
    // private delete(env: JNI$JNIEnv): void;
}