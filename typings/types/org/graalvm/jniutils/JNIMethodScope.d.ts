import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HSObject } from '../../../org/graalvm/jniutils/HSObject.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
export class JNIMethodScope extends Object implements AutoCloseable {
    static env(): JNI$JNIEnv;
    static scope(): JNIMethodScope;
    static scopeOrNull(): JNIMethodScope;
    constructor(scopeName: string, env: JNI$JNIEnv)
    readonly env: JNI$JNIEnv;
    // private leaf: JNIMethodScope;
    // private locals: HSObject;
    // private objResult: JNI$JObject;
    // private parent: JNIMethodScope;
    // private scopeName: string;
    close(): void;
    depth(): number;
    getEnv(): JNI$JNIEnv;
    getObjectResult<R extends JNI$JObject>(): R;
    setObjectResult(obj: JNI$JObject): void;
    toString(): string;
}