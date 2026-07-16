import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { MapRewritePolicy$Mode } from '../../../../../../../org/apache/logging/log4j/core/appender/rewrite/MapRewritePolicy$Mode.d.ts'
import type { RewritePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rewrite/RewritePolicy.d.ts'
import type { KeyValuePair } from '../../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class MapRewritePolicy extends Object implements RewritePolicy {
    static createPolicy(parammode: string, parampairs: KeyValuePair[]): MapRewritePolicy;
    private constructor(map: { [key: string]: Object }, mode: MapRewritePolicy$Mode)
    // private map: { [key: string]: Object };
    // private mode: MapRewritePolicy$Mode;
    rewrite(source: LogEvent): LogEvent;
    toString(): string;
}