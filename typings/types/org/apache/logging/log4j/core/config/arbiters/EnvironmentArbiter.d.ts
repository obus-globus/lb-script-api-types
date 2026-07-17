import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Arbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/Arbiter.d.ts'
import type { EnvironmentArbiter$Builder } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/EnvironmentArbiter$Builder.d.ts'
export class EnvironmentArbiter extends Object implements Arbiter {
    static ELEMENT_TYPE: string;
    static newBuilder(): EnvironmentArbiter$Builder;
    private constructor(propertyName: string, propertyValue: string)
    // private propertyName: string;
    // private propertyValue: string;
    isCondition(): boolean;
}