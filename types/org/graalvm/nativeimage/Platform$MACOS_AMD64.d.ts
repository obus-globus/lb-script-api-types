import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$DARWIN_AMD64 } from '../../../org/graalvm/nativeimage/Platform$DARWIN_AMD64.d.ts'
import type { Platform$MACOS } from '../../../org/graalvm/nativeimage/Platform$MACOS.d.ts'
export class Platform$MACOS_AMD64 extends Object implements Platform$DARWIN_AMD64, Platform$MACOS {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getOS(): string;
}