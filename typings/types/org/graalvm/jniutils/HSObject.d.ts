import type { Object } from '../../../java/lang/Object.d.ts'
import type { HSObject$Cleaner } from '../../../org/graalvm/jniutils/HSObject$Cleaner.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { JNIMethodScope } from '../../../org/graalvm/jniutils/JNIMethodScope.d.ts'
export class HSObject extends Object {
    static cleanHandles(paramenv: JNI$JNIEnv): void;
    constructor(env: JNI$JNIEnv, handle: JNI$JObject)
    constructor(env: JNI$JNIEnv, handle: JNI$JObject, allowGlobalDuplicates: boolean, weak: boolean)
    constructor(scope: JNIMethodScope, handle: JNI$JObject)
    // private cleaner: HSObject$Cleaner;
    readonly handle: JNI$JObject;
    // private next: HSObject;
    getHandle(): JNI$JObject;
    release(env: JNI$JNIEnv): void;
    toString(): string;
}