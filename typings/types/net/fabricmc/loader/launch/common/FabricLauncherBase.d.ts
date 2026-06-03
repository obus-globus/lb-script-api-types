import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { FabricLauncher } from '../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { FabricLauncher as FabricLauncher_2 } from '../../../../../net/fabricmc/loader/launch/common/FabricLauncher.d.ts'
export class FabricLauncherBase extends Object implements FabricLauncher_2 {
    static getClass(paramarg0: string): Class<Object>;
    static getLauncher(): FabricLauncher_2;
    constructor()
    // private parent: FabricLauncher;
    getClassByteArray(arg0: string, arg1: boolean): number[];
    getEnvironmentType(): EnvType;
    getLoadTimeDependencies(): E[];
    getResourceAsStream(arg0: string): InputStream;
    getTargetClassLoader(): ClassLoader;
    isClassLoaded(arg0: string): boolean;
    isDevelopment(): boolean;
    propose(arg0: URL): void;
}