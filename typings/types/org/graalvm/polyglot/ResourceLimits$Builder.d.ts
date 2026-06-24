import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceLimitEvent } from '../../../org/graalvm/polyglot/ResourceLimitEvent.d.ts'
import type { ResourceLimits } from '../../../org/graalvm/polyglot/ResourceLimits.d.ts'
import type { Source } from '../../../org/graalvm/polyglot/Source.d.ts'
export class ResourceLimits$Builder extends Object {
    constructor(null_: ResourceLimits)
    // private onLimit: (param0: Object | null) => void;
    // private statementLimit: number;
    // private statementLimitSourceFilter: (param0: Object | null) => boolean;
    build(): ResourceLimits;
    onLimit(onLimit: (param0: ResourceLimitEvent) => void): ResourceLimits$Builder;
    statementLimit(limit: number, sourceFilter: (param0: Source) => boolean): ResourceLimits$Builder;
}