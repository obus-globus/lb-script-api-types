import type { LinkOption } from '../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { PathWalkOption } from '../../../kotlin/io/path/PathWalkOption.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class PathTreeWalk extends Object implements Sequence<Path> {
    constructor(start: Path, options: PathWalkOption[])
    // private /*not mapped: */ getFollowLinks(): boolean;
    // private /*not mapped: */ getIncludeDirectories(): boolean;
    // private /*not mapped: */ isBFS(): boolean;
    // private /*not mapped: */ getLinkOptions(): LinkOption[];
    // private options: PathWalkOption[];
    // private start: Path;
    // private bfsIterator(): Iterator<Path>;
    // private dfsIterator(): Iterator<Path>;
    iterator(): Iterator<Path>;
}