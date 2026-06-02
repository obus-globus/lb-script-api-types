import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlContextInfo } from '../../../../../../../../net/caffeinemc/mods/sodium/client/compatibility/environment/GlContextInfo.d.ts'
import type { WindowsFileVersion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/WindowsFileVersion.d.ts'
export class NvidiaWorkarounds extends Object {
    static applyContextChanges(paramarg0: GlContextInfo): void;
    static applyEnvironmentChanges(): void;
    static findNvidiaDriverMatchingBug1486(): WindowsFileVersion;
    static isNvidiaGraphicsCardPresent(): boolean;
    static undoEnvironmentChanges(): void;
    constructor()
}