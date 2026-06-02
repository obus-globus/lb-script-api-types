import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractFilterable$Builder } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilterable$Builder.d.ts'
export abstract class AbstractAppender$Builder<B extends AbstractAppender$Builder<B>> extends AbstractFilterable$Builder<B> {
    constructor()
    readonly configuration: Configuration;
    readonly ignoreExceptions: boolean;
    readonly layout: Layout<Serializable>;
    readonly name: string;
    getConfiguration(): Configuration;
    getErrorPrefix(): string;
    getLayout(): Layout<Serializable>;
    getName(): string;
    getOrCreateLayout(): Layout<Serializable>;
    getOrCreateLayout(charset: Charset): Layout<Serializable>;
    isIgnoreExceptions(): boolean;
    setConfiguration(configuration: Configuration): B;
    setIgnoreExceptions(ignoreExceptions: boolean): B;
    setLayout(layout: Layout<Serializable>): B;
    setName(name: string): B;
    withConfiguration(configuration: Configuration): B;
    withIgnoreExceptions(ignoreExceptions: boolean): B;
    withLayout(layout: Layout<Serializable>): B;
    withName(name: string): B;
}