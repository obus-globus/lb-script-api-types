import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EnvironmentArbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/EnvironmentArbiter.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class EnvironmentArbiter$Builder extends Object implements Builder<EnvironmentArbiter> {
    static ATTR_PROPERTY_NAME: string;
    static ATTR_PROPERTY_VALUE: string;
    constructor()
    // private propertyName: string;
    // private propertyValue: string;
    asBuilder(): EnvironmentArbiter$Builder;
    build(): EnvironmentArbiter;
    getErrorPrefix(): string;
    isValid(): boolean;
    setPropertyName(propertyName: string): EnvironmentArbiter$Builder;
    setPropertyValue(propertyValue: string): EnvironmentArbiter$Builder;
}