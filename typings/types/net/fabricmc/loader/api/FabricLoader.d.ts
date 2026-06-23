import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../net/fabricmc/api/EnvType.d.ts'
import type { MappingResolver } from '../../../../net/fabricmc/loader/api/MappingResolver.d.ts'
import type { ModContainer } from '../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { ObjectShare } from '../../../../net/fabricmc/loader/api/ObjectShare.d.ts'
import type { EntrypointContainer } from '../../../../net/fabricmc/loader/api/entrypoint/EntrypointContainer.d.ts'
export interface FabricLoader extends Object {
    getAllMods(): ModContainer[];
    getConfigDir(): Path[];
    getConfigDirectory(): File;
    getEntrypointContainers<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): EntrypointContainer<T>[];
    getEntrypoints<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): T[];
    getEnvironmentType(): EnvType;
    getGameDir(): Path[];
    getGameDirectory(): File;
    getGameInstance(): Object;
    getLaunchArguments(arg0: boolean): string[];
    getMappingResolver(): MappingResolver;
    getModContainer(arg0: string): Optional<ModContainer>;
    getObjectShare(): ObjectShare;
    getRawGameVersion(): string;
    invokeEntrypoints<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>, arg2: (param0: T) => void): void;
    isDevelopmentEnvironment(): boolean;
    isModLoaded(arg0: string): boolean;
}