import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform } from '../../../org/graalvm/nativeimage/Platform.d.ts'
import type { InternalPlatform$NATIVE_ONLY } from '../../../org/graalvm/nativeimage/impl/InternalPlatform$NATIVE_ONLY.d.ts'
export interface Platform$AMD64 extends Object, Platform, InternalPlatform$NATIVE_ONLY{
    getArchitecture(): string;
    getArchitecture(): string;
    getOS(): string;
}