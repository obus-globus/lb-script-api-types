import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { WindowsFileVersion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/WindowsFileVersion.d.ts'
export class IntelWorkarounds extends Object {
    static findIntelDriverMatchingBug899(): WindowsFileVersion;
    static isUsingIntelGen8OrOlder(): boolean;
    constructor()
}