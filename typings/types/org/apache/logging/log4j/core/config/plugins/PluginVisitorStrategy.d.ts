import type { Annotation } from '../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../../kotlin/reflect/KClass.d.ts'
import type { PluginVisitor } from '../../../../../../../org/apache/logging/log4j/core/config/plugins/visitors/PluginVisitor.d.ts'
export interface PluginVisitorStrategy extends Annotation, Object{
    constructor(value: KClass<PluginVisitor<Annotation>>)
    /*not mapped: */ value(): KClass<PluginVisitor<Annotation>>;
}