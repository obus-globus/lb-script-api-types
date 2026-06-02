import type { SourceSectionFilter$SourcePredicate } from '../../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$SourcePredicate.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegexSourceFilter extends Object implements SourceSectionFilter$SourcePredicate {
    constructor(sourcePath: string)
    // private regex: Pattern;
    test(source: Source): boolean;
}