import type { Platform } from '../../../io/ktor/util/Platform.d.ts'
import type { PlatformUtils } from '../../../io/ktor/util/PlatformUtils.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PlatformUtilsJvmKt extends Object {
    static getPlatform(paramarg0: PlatformUtils): Platform;
    static isDevelopmentMode(paramarg0: PlatformUtils): boolean;
}