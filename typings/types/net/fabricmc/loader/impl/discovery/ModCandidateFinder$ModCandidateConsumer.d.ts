import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ModCandidateFinder$ModCandidateConsumer extends Object{
    accept(arg0: Path[], arg1: boolean): void;
    accept(arg0: Path[][], arg1: boolean): void;
}