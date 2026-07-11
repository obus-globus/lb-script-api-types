import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { PathMatcher } from '../../../../../../../../java/nio/file/PathMatcher.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
export class IfFileName extends Object implements PathCondition {
    static EMPTY_ARRAY: (Object | null)[];
    static copy(...paramsource: (Object | null)[]): (Object | null)[];
    static createNameCondition(paramglob: string, paramregex: string, ...paramnestedConditions: (Object | null)[]): IfFileName;
    private constructor(glob: string, regex: string, ...nestedConditions: PathCondition[])
    readonly nestedConditions: PathCondition[];
    // private pathMatcher: (param0: Path[][]) => boolean;
    readonly syntaxAndPattern: string;
    accept(basePath: Path[], relativePath: Path[], attrs: BasicFileAttributes): boolean;
    beforeFileTreeWalk(): void;
    getNestedConditions(): PathCondition[];
    getSyntaxAndPattern(): string;
    toString(): string;
}