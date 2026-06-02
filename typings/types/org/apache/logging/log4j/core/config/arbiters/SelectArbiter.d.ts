import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Arbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/Arbiter.d.ts'
import type { SelectArbiter$Builder } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/SelectArbiter$Builder.d.ts'
export class SelectArbiter extends Object {
    static newBuilder(): SelectArbiter$Builder;
    constructor()
    evaluateConditions(conditions: Arbiter[]): Arbiter;
}