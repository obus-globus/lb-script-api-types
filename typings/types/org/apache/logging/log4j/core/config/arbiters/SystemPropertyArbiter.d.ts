import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Arbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/Arbiter.d.ts'
import type { SystemPropertyArbiter$Builder } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/SystemPropertyArbiter$Builder.d.ts'
export class SystemPropertyArbiter extends Object implements Arbiter {
    static ELEMENT_TYPE: string;
    static newBuilder(): SystemPropertyArbiter$Builder;
    constructor(arg0: string, arg1: string, arg2: any)
    // private propertyName: string;
    // private propertyValue: string;
    isCondition(): boolean;
}