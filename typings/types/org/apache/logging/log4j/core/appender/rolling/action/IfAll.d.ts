import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
export class IfAll extends Object implements PathCondition {
    static EMPTY_ARRAY: (Object | null)[];
    static accept(paramlist: (Object | null)[], parambaseDir: Path[][], paramrelativePath: Path[][], paramattrs: BasicFileAttributes): boolean;
    static beforeFileTreeWalk(paramnestedConditions: (Object | null)[]): void;
    static copy(paramsource: (Object | null)[]): (Object | null)[];
    static createAndCondition(paramcomponents: (Object | null)[]): IfAll;
    private constructor(filters: PathCondition[])
    // private components: PathCondition[];
    accept(baseDir: Path[], relativePath: Path[], attrs: BasicFileAttributes): boolean;
    beforeFileTreeWalk(): void;
    getDeleteFilters(): PathCondition[];
    toString(): string;
}