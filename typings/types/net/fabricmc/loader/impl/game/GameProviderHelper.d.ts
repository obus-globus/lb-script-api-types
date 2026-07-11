import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { ZipFile } from '../../../../../java/util/zip/ZipFile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { GameProviderHelper$FindResult } from '../../../../../net/fabricmc/loader/impl/game/GameProviderHelper$FindResult.d.ts'
import type { FabricLauncher } from '../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
export class GameProviderHelper extends Object {
    static addLibrary(paramarg0: string, paramarg1: Path[][][]): void;
    static deobfuscate(paramarg0: { [key: string]: Path[][] }, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: Path[][], paramarg5: FabricLauncher): { [key: string]: Path[][] };
    static findFirst(paramarg0: Path[][][], paramarg1: Map<Path[][], ZipFile>, paramarg2: boolean, ...paramarg3: (Object | null)[]): GameProviderHelper$FindResult;
    static getCommonGameJar(): Path[][];
    static getEnvGameJar(paramarg0: EnvType): Path[][];
    static getLibraries(paramarg0: string): Path[][][];
    static getSource(paramarg0: ClassLoader, paramarg1: string): Optional<Path[][]>;
    static getSources(paramarg0: ClassLoader, paramarg1: string): Path[][][];
    private constructor()
}