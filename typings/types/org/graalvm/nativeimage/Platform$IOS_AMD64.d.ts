import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$DARWIN_AMD64 } from '../../../org/graalvm/nativeimage/Platform$DARWIN_AMD64.d.ts'
import type { Platform$IOS } from '../../../org/graalvm/nativeimage/Platform$IOS.d.ts'
export class Platform$IOS_AMD64 extends Object implements Platform$DARWIN_AMD64, Platform$IOS {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getOS(): string;
}