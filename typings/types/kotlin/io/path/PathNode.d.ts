import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class PathNode extends Object {
    constructor(path: Path, key: Object | null, parent: PathNode | null)
    contentIterator: Iterator<PathNode> | null;
    readonly key: Object | null;
    readonly parent: PathNode | null;
    readonly path: Path;
}