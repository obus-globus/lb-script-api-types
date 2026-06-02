import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Platform } from '../../../../org/graalvm/nativeimage/Platform.d.ts'
export interface InternalPlatform$PLATFORM_JNI extends Object, Platform{
    getArchitecture(): string;
    getOS(): string;
}