import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$ANDROID } from '../../../org/graalvm/nativeimage/Platform$ANDROID.d.ts'
import type { Platform$LINUX_AARCH64_BASE } from '../../../org/graalvm/nativeimage/Platform$LINUX_AARCH64_BASE.d.ts'
export class Platform$ANDROID_AARCH64 extends Object implements Platform$ANDROID, Platform$LINUX_AARCH64_BASE {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getOS(): string;
}