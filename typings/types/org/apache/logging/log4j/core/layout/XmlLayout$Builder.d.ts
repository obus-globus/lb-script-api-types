import type { AbstractJacksonLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractJacksonLayout$Builder.d.ts'
import type { XmlLayout } from '../../../../../../org/apache/logging/log4j/core/layout/XmlLayout.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class XmlLayout$Builder<B extends XmlLayout$Builder<B>> extends AbstractJacksonLayout$Builder<B> implements Builder<XmlLayout> {
    constructor()
    build(): XmlLayout;
    getErrorPrefix(): string;
    isValid(): boolean;
}