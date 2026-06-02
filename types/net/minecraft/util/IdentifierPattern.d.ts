import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Pattern } from '../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class IdentifierPattern extends Object {
    static CODEC: Codec<IdentifierPattern>;
    private constructor(namespacePattern: Optional<Pattern>, pathPattern: Optional<Pattern>)
    // private locationPredicate: (param0: Identifier) => kotlin.Boolean;
    // private namespacePattern: Optional<Pattern>;
    // private namespacePredicate: (param0: string) => kotlin.Boolean;
    // private pathPattern: Optional<Pattern>;
    // private pathPredicate: (param0: string) => kotlin.Boolean;
    locationPredicate(): (param0: Identifier) => kotlin.Boolean;
    namespacePredicate(): (param0: string) => kotlin.Boolean;
    pathPredicate(): (param0: string) => kotlin.Boolean;
}