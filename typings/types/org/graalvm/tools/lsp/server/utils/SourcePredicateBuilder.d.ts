import type { SourceSectionFilter$SourcePredicate } from '../../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$SourcePredicate.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionValues } from '../../../../../../org/graalvm/options/OptionValues.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export class SourcePredicateBuilder extends Object {
    static newBuilder(): SourcePredicateBuilder;
    private constructor()
    // private predicates: (param0: Source) => kotlin.Boolean[];
    build(): SourceSectionFilter$SourcePredicate;
    excludeInternal(options: OptionValues): SourcePredicateBuilder;
    language(languageInfo: LanguageInfo): SourcePredicateBuilder;
    newestSource(surrogateMap: TextDocumentSurrogateMap): SourcePredicateBuilder;
    uriOrTruffleName(uri: URI): SourcePredicateBuilder;
}