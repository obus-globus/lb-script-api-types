import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$AARCH64 } from '../../../org/graalvm/nativeimage/Platform$AARCH64.d.ts'
import type { Platform$WINDOWS } from '../../../org/graalvm/nativeimage/Platform$WINDOWS.d.ts'
export class Platform$WINDOWS_AARCH64 extends Object implements Platform$AARCH64, Platform$WINDOWS {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getArchitecture(): string;
}