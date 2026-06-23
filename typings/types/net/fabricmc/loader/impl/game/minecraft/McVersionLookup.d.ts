import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { McVersion } from '../../../../../../net/fabricmc/loader/impl/game/minecraft/McVersion.d.ts'
import type { McVersion$Builder } from '../../../../../../net/fabricmc/loader/impl/game/minecraft/McVersion$Builder.d.ts'
import type { SimpleClassPath } from '../../../../../../net/fabricmc/loader/impl/util/SimpleClassPath.d.ts'
export class McVersionLookup extends Object {
    static fillVersionFromJar(paramarg0: SimpleClassPath, paramarg1: McVersion$Builder): void;
    static getRelease(paramarg0: string): string;
    static getVersion(paramarg0: Path[][][], paramarg1: string, paramarg2: string): McVersion;
    static getVersionExceptClassVersion(paramarg0: Path[][]): McVersion;
    static normalizeVersion(paramarg0: string, paramarg1: string): string;
    constructor()
}