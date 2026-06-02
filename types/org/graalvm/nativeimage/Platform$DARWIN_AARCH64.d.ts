import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$AARCH64 } from '../../../org/graalvm/nativeimage/Platform$AARCH64.d.ts'
import type { Platform$DARWIN } from '../../../org/graalvm/nativeimage/Platform$DARWIN.d.ts'
export interface Platform$DARWIN_AARCH64 extends Object, Platform$AARCH64, Platform$DARWIN{
    getArchitecture(): string;
}