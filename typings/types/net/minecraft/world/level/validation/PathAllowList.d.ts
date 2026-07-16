import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathAllowList$ConfigEntry } from '../../../../../net/minecraft/world/level/validation/PathAllowList$ConfigEntry.d.ts'
export class PathAllowList extends Object implements PathMatcher {
    static readPlain(paramreader: BufferedReader): PathAllowList;
    constructor(entries: PathAllowList$ConfigEntry[])
    // private compiledPaths: { [key: string]: (param0: Path) => boolean };
    // private entries: PathAllowList$ConfigEntry[];
    getForFileSystem(fileSystem: FileSystem): (param0: Path) => boolean;
    matches(path: Path): boolean;
}