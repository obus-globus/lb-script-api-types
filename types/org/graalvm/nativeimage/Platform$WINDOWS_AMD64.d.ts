import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$AMD64 } from '../../../org/graalvm/nativeimage/Platform$AMD64.d.ts'
import type { Platform$WINDOWS } from '../../../org/graalvm/nativeimage/Platform$WINDOWS.d.ts'
export class Platform$WINDOWS_AMD64 extends Object implements Platform$AMD64, Platform$WINDOWS {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getArchitecture(): string;
}