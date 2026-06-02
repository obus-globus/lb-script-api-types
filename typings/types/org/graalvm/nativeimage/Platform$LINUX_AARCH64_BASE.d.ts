import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$AARCH64 } from '../../../org/graalvm/nativeimage/Platform$AARCH64.d.ts'
import type { Platform$LINUX } from '../../../org/graalvm/nativeimage/Platform$LINUX.d.ts'
export interface Platform$LINUX_AARCH64_BASE extends Object, Platform$AARCH64, Platform$LINUX{
    getArchitecture(): string;
    getOS(): string;
}