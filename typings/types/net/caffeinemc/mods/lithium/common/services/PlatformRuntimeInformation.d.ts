import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface PlatformRuntimeInformation extends Object{
    getConfigDirectory(): Path;
    getGameDirectory(): Path;
    isDevelopmentEnvironment(): boolean;
    isModInLoadingList(arg0: string): boolean;
    platformHasEarlyLoadingScreen(): boolean;
}