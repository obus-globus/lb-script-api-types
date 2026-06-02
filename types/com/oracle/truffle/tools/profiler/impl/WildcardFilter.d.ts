import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WildcardFilter extends Object {
    constructor(strings: string[], patterns: Pattern[], expression: string)
    // private expression: string;
    // private patterns: Pattern[];
    // private strings: string[];
    testWildcardExpressions(value: string): boolean;
    toString(): string;
}