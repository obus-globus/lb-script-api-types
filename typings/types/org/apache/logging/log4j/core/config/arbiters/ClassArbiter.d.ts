import type { ClassArbiter$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Arbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/Arbiter.d.ts'
import type { ClassArbiter$Builder } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/ClassArbiter$Builder.d.ts'
export class ClassArbiter extends Object implements Arbiter {
    static ELEMENT_TYPE: string;
    static newBuilder(): ClassArbiter$Builder;
    private constructor(className: string)
    constructor(arg0: string, arg1: ClassArbiter$1)
    // private className: string;
    isCondition(): boolean;
}