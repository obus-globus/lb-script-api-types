import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$AMD64 } from '../../../org/graalvm/nativeimage/Platform$AMD64.d.ts'
import type { Platform$LINUX } from '../../../org/graalvm/nativeimage/Platform$LINUX.d.ts'
export interface Platform$LINUX_AMD64_BASE extends Object, Platform$AMD64, Platform$LINUX{
    getArchitecture(): string;
    getOS(): string;
}