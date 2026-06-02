import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Arbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/Arbiter.d.ts'
import type { DefaultArbiter$Builder } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/DefaultArbiter$Builder.d.ts'
export class DefaultArbiter extends Object implements Arbiter {
    static ELEMENT_TYPE: string;
    static newBuilder(): DefaultArbiter$Builder;
    constructor()
    isCondition(): boolean;
}