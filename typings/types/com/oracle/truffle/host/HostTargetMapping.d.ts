import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { HostAccess$TargetMappingPrecedence } from '../../../../org/graalvm/polyglot/HostAccess$TargetMappingPrecedence.d.ts'
export class HostTargetMapping extends Object implements Comparable<HostTargetMapping> {
    constructor(sourceType: Class<Object>, targetType: Class<Object>, accepts: (param0: Object) => boolean, converter: (param0: Object) => Object, precedence: HostAccess$TargetMappingPrecedence)
    // private accepts: (param0: Object) => boolean;
    // private converter: (param0: Object) => Object;
    // private hostPriority: number;
    // private sourceType: Class<Object>;
    // private targetType: Class<Object>;
    compareTo(o: HostTargetMapping): number;
}