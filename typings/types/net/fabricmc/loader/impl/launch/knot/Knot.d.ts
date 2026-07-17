import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Manifest } from '../../../../../../java/util/jar/Manifest.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../../net/fabricmc/api/EnvType.d.ts'
import type { GameProvider } from '../../../../../../net/fabricmc/loader/impl/game/GameProvider.d.ts'
import type { FabricLauncher } from '../../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { FabricLauncherBase } from '../../../../../../net/fabricmc/loader/impl/launch/FabricLauncherBase.d.ts'
import type { KnotClassLoaderInterface } from '../../../../../../net/fabricmc/loader/impl/launch/knot/KnotClassLoaderInterface.d.ts'
export class Knot extends FabricLauncherBase {
    static getClass(paramarg0: string): Class<Object>;
    static getLauncher(): FabricLauncher;
    static getProperties(): JavaMap<string, Object>;
    static isMixinReady(): boolean;
    static launch(paramarg0: string[], paramarg1: EnvType): void;
    static main(paramarg0: string[]): void;
    static setLauncher(paramarg0: FabricLauncher): void;
    constructor(arg0: EnvType)
    // private classLoader: KnotClassLoaderInterface;
    readonly classPath: Path[];
    // private envType: EnvType;
    // private properties: JavaMap<string, Object>;
    // private provider: GameProvider;
    // private unlocked: boolean;
    addToClassPath(arg0: Path, ...arg1: string[]): void;
    // private createGameProvider(arg0: string[]): GameProvider;
    getClassByteArray(arg0: string, arg1: boolean): number[];
    getClassPath(): Path[];
    getEntrypoint(): string;
    getEnvironmentType(): EnvType;
    getManifest(arg0: Path): Manifest;
    getResourceAsStream(arg0: string): InputStream;
    getTargetClassLoader(): ClassLoader;
    init(arg0: string[]): ClassLoader;
    isClassLoaded(arg0: string): boolean;
    loadIntoTarget(arg0: string): Class<Object>;
    setAllowedPrefixes(arg0: Path, ...arg1: string[]): void;
    setValidParentClassPath(arg0: Path[]): void;
}