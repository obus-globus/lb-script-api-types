import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface PathCondition extends Object{
    accept(baseDir: Path[], relativePath: Path[], attrs: BasicFileAttributes): boolean;
    beforeFileTreeWalk(): void;
}