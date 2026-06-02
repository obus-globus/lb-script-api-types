import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform } from '../../../okhttp3/internal/platform/Platform.d.ts'
export class PlatformRegistry extends Object {
    static INSTANCE: PlatformRegistry;
    /*not mapped: */ isAndroid(): boolean;
    // private /*not mapped: */ isBouncyCastlePreferred(): boolean;
    // private /*not mapped: */ isConscryptPreferred(): boolean;
    // private /*not mapped: */ isOpenJSSEPreferred(): boolean;
    findPlatform(): Platform;
}