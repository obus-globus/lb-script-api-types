import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$LINUX } from '../../../org/graalvm/nativeimage/Platform$LINUX.d.ts'
import type { Platform$LINUX_AMD64_BASE } from '../../../org/graalvm/nativeimage/Platform$LINUX_AMD64_BASE.d.ts'
export class Platform$LINUX_AMD64 extends Object implements Platform$LINUX, Platform$LINUX_AMD64_BASE {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getOS(): string;
}