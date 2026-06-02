import type { File } from '../../../../../java/io/File.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFileFilter } from '../../../../../org/apache/commons/io/filefilter/AbstractFileFilter.d.ts'
export class PathMatcherFileFilter extends AbstractFileFilter {
    static EMPTY_STRING_ARRAY: (Object | null)[];
    constructor(arg0: (param0: Path[][]) => kotlin.Boolean)
    // private pathMatcher: (param0: Path[][]) => kotlin.Boolean;
    accept(arg0: File): boolean;
    matches(arg0: Path[]): boolean;
}