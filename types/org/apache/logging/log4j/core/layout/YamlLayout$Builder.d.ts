import type { AbstractJacksonLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractJacksonLayout$Builder.d.ts'
import type { YamlLayout } from '../../../../../../org/apache/logging/log4j/core/layout/YamlLayout.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class YamlLayout$Builder<B extends YamlLayout$Builder<B>> extends AbstractJacksonLayout$Builder<B> implements Builder<YamlLayout> {
    constructor()
    build(): YamlLayout;
    getErrorPrefix(): string;
    isValid(): boolean;
}