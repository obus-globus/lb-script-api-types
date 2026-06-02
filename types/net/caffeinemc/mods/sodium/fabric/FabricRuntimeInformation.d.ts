import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlatformRuntimeInformation } from '../../../../../net/caffeinemc/mods/sodium/client/services/PlatformRuntimeInformation.d.ts'
export class FabricRuntimeInformation extends Object implements PlatformRuntimeInformation {
    static INSTANCE: PlatformRuntimeInformation;
    static getInstance(): PlatformRuntimeInformation;
    constructor()
    getConfigDirectory(): Path[];
    getGameDirectory(): Path[];
    isDevelopmentEnvironment(): boolean;
    isModInLoadingList(arg0: string): boolean;
    platformHasEarlyLoadingScreen(): boolean;
    platformUsesRefmap(): boolean;
    usesBakedQuadColorMultiplication(): boolean;
}