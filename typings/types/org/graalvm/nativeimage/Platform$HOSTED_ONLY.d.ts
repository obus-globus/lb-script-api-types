import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform } from '../../../org/graalvm/nativeimage/Platform.d.ts'
export class Platform$HOSTED_ONLY extends Object implements Platform {
    static PLATFORM_PROPERTY_NAME: string;
    static includedIn(paramplatformGroup: Class<Object>): boolean;
    private constructor()
    getArchitecture(): string;
    getOS(): string;
}