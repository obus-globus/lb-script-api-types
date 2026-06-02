import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListChecker } from '../../../../../../../org/apache/logging/log4j/core/layout/internal/ListChecker.d.ts'
import type { ListChecker$NoopChecker } from '../../../../../../../org/apache/logging/log4j/core/layout/internal/ListChecker$NoopChecker.d.ts'
export class IncludeChecker extends Object implements ListChecker {
    static NOOP_CHECKER: ListChecker$NoopChecker;
    constructor(list: string[])
    // private list: string[];
    check(key: string): boolean;
    toString(): string;
}