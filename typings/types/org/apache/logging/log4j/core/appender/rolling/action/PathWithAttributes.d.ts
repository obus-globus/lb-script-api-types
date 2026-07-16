import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PathWithAttributes extends Object {
    constructor(path: Path, attributes: BasicFileAttributes)
    readonly attributes: BasicFileAttributes;
    readonly path: Path;
    getAttributes(): BasicFileAttributes;
    getPath(): Path;
    toString(): string;
}