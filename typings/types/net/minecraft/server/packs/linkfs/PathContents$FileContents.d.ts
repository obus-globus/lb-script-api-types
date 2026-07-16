import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathContents } from '../../../../../net/minecraft/server/packs/linkfs/PathContents.d.ts'
export class PathContents$FileContents extends Record implements PathContents {
    static MISSING: PathContents;
    static RELATIVE: PathContents;
    constructor(contents: Path)
    // private contents: Path;
    contents(): Path;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}