import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CachedOutput extends Object{
    writeIfNeeded(path: Path, input: number[], hash: HashCode): void;
}