import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { RewritePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rewrite/RewritePolicy.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class PropertiesRewritePolicy extends Object implements RewritePolicy {
    static createPolicy(paramconfig: Configuration, paramprops: Property[]): PropertiesRewritePolicy;
    private constructor(config: Configuration, props: Property[])
    // private config: Configuration;
    // private properties: Map<Property, boolean>;
    rewrite(source: LogEvent): LogEvent;
    toString(): string;
}