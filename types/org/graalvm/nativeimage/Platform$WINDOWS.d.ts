import type { Object } from '../../../java/lang/Object.d.ts'
import type { InternalPlatform$PLATFORM_JNI } from '../../../org/graalvm/nativeimage/impl/InternalPlatform$PLATFORM_JNI.d.ts'
import type { InternalPlatform$WINDOWS_BASE } from '../../../org/graalvm/nativeimage/impl/InternalPlatform$WINDOWS_BASE.d.ts'
export interface Platform$WINDOWS extends Object, InternalPlatform$PLATFORM_JNI, InternalPlatform$WINDOWS_BASE{
    getOS(): string;
}