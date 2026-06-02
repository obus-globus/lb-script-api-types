import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { URI } from '../../../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ResolverUtil$Test } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/ResolverUtil$Test.d.ts'
export class PluginRegistry$PluginTest extends Object implements ResolverUtil$Test {
    constructor()
    doesMatchClass(): boolean;
    doesMatchResource(): boolean;
    matches(type: Class<Object>): boolean;
    matches(resource: URI): boolean;
    toString(): string;
}