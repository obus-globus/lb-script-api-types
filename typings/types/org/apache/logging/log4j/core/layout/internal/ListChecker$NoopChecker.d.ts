import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListChecker } from '../../../../../../../org/apache/logging/log4j/core/layout/internal/ListChecker.d.ts'
export class ListChecker$NoopChecker extends Object implements ListChecker {
    static NOOP_CHECKER: ListChecker$NoopChecker;
    constructor()
    check(key: string): boolean;
    toString(): string;
}