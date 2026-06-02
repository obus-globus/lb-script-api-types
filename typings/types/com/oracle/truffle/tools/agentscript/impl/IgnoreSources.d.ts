import type { SourceSectionFilter$SourcePredicate } from '../../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$SourcePredicate.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IgnoreSources extends Object implements SourceSectionFilter$SourcePredicate {
    constructor()
    // private ignore: Map<Source, boolean>;
    ignoreSource(source: Source): void;
    test(source: Source): boolean;
}