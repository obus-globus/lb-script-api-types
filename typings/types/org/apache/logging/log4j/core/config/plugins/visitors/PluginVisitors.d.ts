import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginVisitor } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/visitors/PluginVisitor.d.ts'
export class PluginVisitors extends Object {
    static findVisitor(paramannotation: Class<Object>): PluginVisitor<Object>;
    private constructor()
}