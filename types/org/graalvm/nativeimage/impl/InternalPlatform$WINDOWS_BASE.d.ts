import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InternalPlatform$NATIVE_ONLY } from '../../../../org/graalvm/nativeimage/impl/InternalPlatform$NATIVE_ONLY.d.ts'
export interface InternalPlatform$WINDOWS_BASE extends Object, InternalPlatform$NATIVE_ONLY{
    getOS(): string;
}