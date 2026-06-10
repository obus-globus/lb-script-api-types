import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginVisitor } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/visitors/PluginVisitor.d.ts'
export class PluginVisitors extends Object {
    static findVisitor(paramannotation: Class<Annotation>): PluginVisitor<Annotation>;
    private constructor()
}