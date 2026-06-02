import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlContextInfo } from '../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/GlContextInfo.d.ts'
import type { NativeWindowHandle } from '../../../../../../../net/caffeinemc/mods/sodium/client/platform/NativeWindowHandle.d.ts'
export class PostLaunchChecks extends Object {
    static onContextInitialized(paramarg0: NativeWindowHandle, paramarg1: GlContextInfo): void;
    constructor()
}