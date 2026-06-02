import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { HostAccess$TargetMappingPrecedence } from '../../../../org/graalvm/polyglot/HostAccess$TargetMappingPrecedence.d.ts'
export class HostTargetMapping extends Object implements Comparable<HostTargetMapping> {
    constructor(sourceType: Class<S>, targetType: Class<T>, accepts: (param0: S) => kotlin.Boolean, converter: (param0: S) => T, precedence: HostAccess$TargetMappingPrecedence)
    // private accepts: (param0: Object) => kotlin.Boolean;
    // private converter: (param0: Object) => Object;
    // private hostPriority: number;
    // private sourceType: Class<Object>;
    // private targetType: Class<Object>;
    compareTo(o: HostTargetMapping): number;
}