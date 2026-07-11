import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
export class IfAny extends Object implements PathCondition {
    static EMPTY_ARRAY: (Object | null)[];
    static copy(...paramsource: (Object | null)[]): (Object | null)[];
    static createOrCondition(...paramcomponents: (Object | null)[]): IfAny;
    private constructor(...filters: PathCondition[])
    // private components: PathCondition[];
    accept(baseDir: Path[], relativePath: Path[], attrs: BasicFileAttributes): boolean;
    beforeFileTreeWalk(): void;
    getDeleteFilters(): PathCondition[];
    toString(): string;
}