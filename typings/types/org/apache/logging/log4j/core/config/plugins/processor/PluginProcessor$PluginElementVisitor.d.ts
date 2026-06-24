import type { PluginProcessor$1 } from '../../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { TypeElement } from '../../../../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Elements } from '../../../../../../../../javax/lang/model/util/Elements.d.ts'
import type { SimpleElementVisitor7 } from '../../../../../../../../javax/lang/model/util/SimpleElementVisitor7.d.ts'
import type { Plugin } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/Plugin.d.ts'
import type { PluginEntry } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/PluginEntry.d.ts'
export class PluginProcessor$PluginElementVisitor extends SimpleElementVisitor7<PluginEntry, Plugin> {
    private constructor(elements: Elements)
    constructor(arg0: Elements, arg1: PluginProcessor$1)
    // private elements: Elements;
    visitType(e: TypeElement, plugin: Plugin): PluginEntry;
}