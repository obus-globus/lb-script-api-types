import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$DARWIN_AARCH64 } from '../../../org/graalvm/nativeimage/Platform$DARWIN_AARCH64.d.ts'
import type { Platform$IOS } from '../../../org/graalvm/nativeimage/Platform$IOS.d.ts'
export class Platform$IOS_AARCH64 extends Object implements Platform$DARWIN_AARCH64, Platform$IOS {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getOS(): string;
}