import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SystemPropertyArbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/SystemPropertyArbiter.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SystemPropertyArbiter$Builder extends Object implements Builder<SystemPropertyArbiter> {
    static ATTR_PROPERTY_NAME: string;
    static ATTR_PROPERTY_VALUE: string;
    constructor()
    // private propertyName: string;
    // private propertyValue: string;
    asBuilder(): SystemPropertyArbiter$Builder;
    build(): SystemPropertyArbiter;
    getErrorPrefix(): string;
    isValid(): boolean;
    setPropertyName(propertyName: string): SystemPropertyArbiter$Builder;
    setPropertyValue(propertyValue: string): SystemPropertyArbiter$Builder;
}