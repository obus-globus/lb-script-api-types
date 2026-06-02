import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { AbstractLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractLayout$Builder.d.ts'
import type { AbstractStringLayout$Serializer } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer.d.ts'
export abstract class AbstractStringLayout$Builder<B extends AbstractStringLayout$Builder<B>> extends AbstractLayout$Builder<B> {
    constructor()
    readonly charset: Charset;
    readonly footerSerializer: AbstractStringLayout$Serializer;
    readonly headerSerializer: AbstractStringLayout$Serializer;
    getCharset(): Charset;
    getFooterSerializer(): AbstractStringLayout$Serializer;
    getHeaderSerializer(): AbstractStringLayout$Serializer;
    setCharset(charset: Charset): B;
    setFooterSerializer(footerSerializer: AbstractStringLayout$Serializer): B;
    setHeaderSerializer(headerSerializer: AbstractStringLayout$Serializer): B;
}