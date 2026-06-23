import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../net/fabricmc/api/EnvType.d.ts'
import type { FabricLoader } from '../../../../net/fabricmc/loader/FabricLoader.d.ts'
import type { LanguageAdapter } from '../../../../net/fabricmc/loader/api/LanguageAdapter.d.ts'
import type { MappingResolver } from '../../../../net/fabricmc/loader/api/MappingResolver.d.ts'
import type { ModContainer } from '../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { ObjectShare } from '../../../../net/fabricmc/loader/api/ObjectShare.d.ts'
import type { EntrypointContainer } from '../../../../net/fabricmc/loader/api/entrypoint/EntrypointContainer.d.ts'
import type { ModContainerImpl } from '../../../../net/fabricmc/loader/impl/ModContainerImpl.d.ts'
import type { ModCandidateImpl } from '../../../../net/fabricmc/loader/impl/discovery/ModCandidateImpl.d.ts'
import type { EntrypointStorage } from '../../../../net/fabricmc/loader/impl/entrypoint/EntrypointStorage.d.ts'
import type { GameProvider } from '../../../../net/fabricmc/loader/impl/game/GameProvider.d.ts'
import type { ClassTweaker } from '../../../../net/fabricmc/loader/impl/lib/classtweaker/api/ClassTweaker.d.ts'
export class FabricLoaderImpl extends FabricLoader {
    static ASM_VERSION: number;
    static CACHE_DIR_NAME: string;
    static INSTANCE: FabricLoader;
    static INSTANCE: FabricLoaderImpl;
    static MOD_ID: string;
    static REMAPPED_JARS_DIR_NAME: string;
    static VERSION: string;
    private constructor()
    // private adapterMap: { [key: string]: LanguageAdapter };
    readonly classTweaker: ClassTweaker;
    readonly configDir: Path[];
    // private entrypointStorage: EntrypointStorage;
    // private frozen: boolean;
    readonly gameDir: Path[];
    readonly gameInstance: Object;
    readonly mappingResolver: MappingResolver;
    // private modCandidates: ModCandidateImpl[];
    // private modMap: { [key: string]: ModContainerImpl };
    mods: ModContainerImpl[];
    readonly objectShare: ObjectShare;
    // private provider: GameProvider;
    // private addMod(arg0: ModCandidateImpl): void;
    // private dumpModList(arg0: ModCandidateImpl[]): void;
    // private dumpModList0(arg0: ModCandidateImpl, arg1: StringBuilder, arg2: number, arg3: (Object | null)[]): void;
    dumpNonFabricMods(arg0: Path[][]): void;
    // private finishModLoading(): void;
    freeze(): void;
    getAllMods(): ModContainer[];
    getClassTweaker(): ClassTweaker;
    getConfigDir(): Path[];
    getConfigDirectory(): File;
    getEntrypointContainers<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): EntrypointContainer<T>[];
    getEntrypoints<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): T[];
    getEnvironmentType(): EnvType;
    getGameDir(): Path[];
    getGameDirectory(): File;
    getGameInstance(): Object;
    getGameProvider(): GameProvider;
    getLaunchArguments(arg0: boolean): string[];
    getMappingResolver(): MappingResolver;
    getModCandidate(arg0: string): ModCandidateImpl;
    getModContainer(arg0: string): Optional<ModContainer>;
    getModsDirectory0(): Path[];
    getModsInternal(): ModContainerImpl[];
    getObjectShare(): ObjectShare;
    getRawGameVersion(): string;
    hasEntrypoints(arg0: string): boolean;
    invokeEntrypoints<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>, arg2: (param0: T) => void): void;
    isDevelopmentEnvironment(): boolean;
    isModLoaded(arg0: string): boolean;
    load(): void;
    loadClassTweakers(): void;
    prepareModInit(arg0: Path[], arg1: Object): void;
    // private setGameDir(arg0: Path[]): void;
    setGameInstance(arg0: Object): void;
    setGameProvider(arg0: GameProvider): void;
    // private setup(): void;
    // private setupLanguageAdapters(): void;
    // private setupMods(): void;
    tryGetGameProvider(): GameProvider;
}