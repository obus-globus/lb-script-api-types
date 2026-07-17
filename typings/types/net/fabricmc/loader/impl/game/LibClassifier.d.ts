import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { GameProvider } from '../../../../../net/fabricmc/loader/impl/game/GameProvider.d.ts'
import type { LibClassifier$LibraryType } from '../../../../../net/fabricmc/loader/impl/game/LibClassifier$LibraryType.d.ts'
import type { LoaderLibrary } from '../../../../../net/fabricmc/loader/impl/game/LoaderLibrary.d.ts'
export class LibClassifier<L extends Enum<L> & LibClassifier$LibraryType> extends Object {
    constructor(arg0: Class<L>, arg1: EnvType, arg2: GameProvider)
    // private libs: L[];
    // private localPaths: JavaMap<L, string>;
    // private origins: JavaMap<L, Path>;
    readonly systemLibraries: Path[];
    readonly unmatchedOrigins: Path[];
    // private addLibrary(arg0: L, arg1: Path, arg2: string): void;
    getClassName(arg0: L): string;
    getLocalPath(arg0: L): string;
    getOrigin(arg0: L): Path;
    getSystemLibraries(): Path[];
    getUnmatchedOrigins(): Path[];
    has(arg0: L): boolean;
    is(arg0: Path, ...arg1: L[]): boolean;
    process(arg0: URL): void;
    process(arg0: Path, ...arg1: L[]): void;
    // private process(arg0: Path, arg1: L[]): void;
    process(arg0: Path[], ...arg1: L[]): void;
    // private processManifestClassPath(arg0: LoaderLibrary, arg1: EnvType, arg2: boolean): void;
    remove(arg0: Path): boolean;
}