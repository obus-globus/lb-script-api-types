import type { Object } from '../../../java/lang/Object.d.ts'
import type { InternalPlatform$NATIVE_ONLY } from '../../../org/graalvm/nativeimage/impl/InternalPlatform$NATIVE_ONLY.d.ts'
import type { InternalPlatform$PLATFORM_JNI } from '../../../org/graalvm/nativeimage/impl/InternalPlatform$PLATFORM_JNI.d.ts'
export interface Platform$LINUX extends Object, InternalPlatform$NATIVE_ONLY, InternalPlatform$PLATFORM_JNI{
    getOS(): string;
}