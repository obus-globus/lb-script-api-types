import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlatformRuntimeInformation } from '../../../../../net/caffeinemc/mods/lithium/common/services/PlatformRuntimeInformation.d.ts'
export class FabricRuntimeInformation extends Object implements PlatformRuntimeInformation {
    static INSTANCE: PlatformRuntimeInformation;
    static getInstance(): PlatformRuntimeInformation;
    constructor()
    getConfigDirectory(): Path[];
    getGameDirectory(): Path[];
    isDevelopmentEnvironment(): boolean;
    isModInLoadingList(arg0: string): boolean;
    platformHasEarlyLoadingScreen(): boolean;
}