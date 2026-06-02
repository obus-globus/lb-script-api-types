import type { TypeElement } from '../../../../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Elements } from '../../../../../../../../javax/lang/model/util/Elements.d.ts'
import type { SimpleElementVisitor7 } from '../../../../../../../../javax/lang/model/util/SimpleElementVisitor7.d.ts'
import type { Plugin } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/Plugin.d.ts'
export class PluginProcessor$PluginAliasesElementVisitor extends SimpleElementVisitor7<E[], Plugin> {
    private constructor(elements: Elements)
    // private elements: Elements;
    visitType(e: TypeElement, plugin: Plugin): E[];
}