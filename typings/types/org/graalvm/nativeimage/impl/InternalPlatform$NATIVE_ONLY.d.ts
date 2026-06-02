import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Platform } from '../../../../org/graalvm/nativeimage/Platform.d.ts'
export interface InternalPlatform$NATIVE_ONLY extends Object, Platform{
    getArchitecture(): string;
    getOS(): string;
}