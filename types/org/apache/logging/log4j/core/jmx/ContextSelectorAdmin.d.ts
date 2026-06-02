import type { ObjectName } from '../../../../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextSelectorAdminMBean } from '../../../../../../org/apache/logging/log4j/core/jmx/ContextSelectorAdminMBean.d.ts'
import type { ContextSelector } from '../../../../../../org/apache/logging/log4j/core/selector/ContextSelector.d.ts'
export class ContextSelectorAdmin extends Object implements ContextSelectorAdminMBean {
    static PATTERN: string;
    constructor(contextName: string, selector: ContextSelector)
    readonly objectName: ObjectName;
    // private selector: ContextSelector;
    getImplementationClassName(): string;
    getObjectName(): ObjectName;
}