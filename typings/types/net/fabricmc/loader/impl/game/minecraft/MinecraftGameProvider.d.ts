import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { EnvType } from '../../../../../../net/fabricmc/api/EnvType.d.ts'
import type { GameProvider } from '../../../../../../net/fabricmc/loader/impl/game/GameProvider.d.ts'
import type { GameProvider$BuiltinMod } from '../../../../../../net/fabricmc/loader/impl/game/GameProvider$BuiltinMod.d.ts'
import type { GameProvider$BuiltinTransform } from '../../../../../../net/fabricmc/loader/impl/game/GameProvider$BuiltinTransform.d.ts'
import type { McVersion } from '../../../../../../net/fabricmc/loader/impl/game/minecraft/McVersion.d.ts'
import type { GameTransformer } from '../../../../../../net/fabricmc/loader/impl/game/patch/GameTransformer.d.ts'
import type { FabricLauncher } from '../../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { Arguments } from '../../../../../../net/fabricmc/loader/impl/util/Arguments.d.ts'
export class MinecraftGameProvider extends Object implements GameProvider {
    constructor()
    readonly arguments: Arguments;
    readonly entrypoint: string;
    // private envType: EnvType;
    // private gameJars: Path[][];
    // private hasModLoader: boolean;
    // private log4jAvailable: boolean;
    // private logJars: Path[][];
    // private miscGameLibraries: Path[][];
    // private realmsJar: Path[];
    // private slf4jAvailable: boolean;
    // private transformer: GameTransformer;
    // private validParentClassPath: Path[][];
    // private versionData: McVersion;
    canOpenErrorGui(): boolean;
    displayCrash(arg0: Throwable, arg1: string): boolean;
    getArguments(): Arguments;
    getBuiltinMods(): GameProvider$BuiltinMod[];
    getBuiltinTransforms(arg0: string): GameProvider$BuiltinTransform[];
    getDefaultModDistributionNamespace(arg0: string): string;
    getEntrypoint(): string;
    getEntrypointTransformer(): GameTransformer;
    getGameId(): string;
    getGameJar(): Path[];
    getGameName(): string;
    getLaunchArguments(arg0: boolean): string[];
    getLaunchDirectory(): Path[];
    getNormalizedGameVersion(): string;
    getRawGameVersion(): string;
    getRuntimeNamespace(arg0: string): string;
    hasAwtSupport(): boolean;
    initialize(arg0: FabricLauncher): void;
    isEnabled(): boolean;
    launch(arg0: ClassLoader): void;
    locateGame(arg0: FabricLauncher, arg1: string[]): boolean;
    requiresUrlClassLoader(): boolean;
    // private setupLogHandler(arg0: FabricLauncher, arg1: boolean): void;
    unlockClassPath(arg0: FabricLauncher): void;
}