import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$DARWIN_AARCH64 } from '../../../org/graalvm/nativeimage/Platform$DARWIN_AARCH64.d.ts'
import type { Platform$MACOS } from '../../../org/graalvm/nativeimage/Platform$MACOS.d.ts'
export class Platform$MACOS_AARCH64 extends Object implements Platform$DARWIN_AARCH64, Platform$MACOS {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getOS(): string;
}