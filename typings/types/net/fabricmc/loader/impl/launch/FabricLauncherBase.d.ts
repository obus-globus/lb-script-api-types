import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { FabricLauncher } from '../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { MappingConfiguration } from '../../../../../net/fabricmc/loader/impl/launch/MappingConfiguration.d.ts'
export abstract class FabricLauncherBase extends Object implements FabricLauncher {
    static getClass(paramarg0: string): Class<Object>;
    static getLauncher(): FabricLauncher;
    static getProperties(): { [key: string]: Object };
    static isMixinReady(): boolean;
    static setLauncher(paramarg0: FabricLauncher): void;
    constructor()
    getEntrypoint(): string;
    getEnvironmentType(): EnvType;
    getMappingConfiguration(): MappingConfiguration;
    getResourceAsStream(arg0: string): InputStream;
    getTargetClassLoader(): ClassLoader;
    isClassLoaded(arg0: string): boolean;
    isDevelopment(): boolean;
}