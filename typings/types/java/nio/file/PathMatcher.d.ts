import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PathMatcher extends Object{
    matches(arg0: Path[]): boolean;
}