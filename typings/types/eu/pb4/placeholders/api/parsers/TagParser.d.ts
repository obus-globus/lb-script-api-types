import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { ParserBuilder } from '../../../../../eu/pb4/placeholders/api/parsers/ParserBuilder.d.ts'
import type { TagLikeParser } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser.d.ts'
import type { TagLikeParser$Format } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format.d.ts'
import type { TagLikeParser$Provider } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Provider.d.ts'
import type { TagLikeWrapper } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeWrapper.d.ts'
import type { WrappedText } from '../../../../../eu/pb4/placeholders/api/parsers/WrappedText.d.ts'
import type { TagRegistry } from '../../../../../eu/pb4/placeholders/api/parsers/tag/TagRegistry.d.ts'
import type { TextTag } from '../../../../../eu/pb4/placeholders/api/parsers/tag/TextTag.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class TagParser extends Object implements NodeParser, TagLikeWrapper {
    static DEFAULT: TagParser;
    static DEFAULT_SAFE: TagParser;
    static NOOP: NodeParser;
    static QUICK_TEXT: TagParser;
    static QUICK_TEXT_SAFE: TagParser;
    static QUICK_TEXT_WITH_STF: TagParser;
    static QUICK_TEXT_WITH_STF_SAFE: TagParser;
    static SIMPLIFIED_TEXT_FORMAT: TagParser;
    static SIMPLIFIED_TEXT_FORMAT_SAFE: TagParser;
    static builder(): ParserBuilder;
    static createQuickText(): TagParser;
    static createQuickText(paramarg0: TagRegistry): TagParser;
    static createQuickTextWithSTF(): TagParser;
    static createQuickTextWithSTF(paramarg0: TagRegistry): TagParser;
    static createSimplifiedTextFormat(): TagParser;
    static createSimplifiedTextFormat(paramarg0: TagRegistry): TagParser;
    static merge(paramarg0: (Object | null)[]): NodeParser;
    static merge(paramarg0: NodeParser[]): NodeParser;
    private constructor(arg0: TagLikeParser$Format, arg1: TagRegistry, arg2: (param0: TagRegistry) => TagLikeParser$Provider)
    // private format: TagLikeParser$Format;
    // private parser: TagLikeParser;
    // private providerCreator: (param0: TagRegistry) => TagLikeParser$Provider;
    // private registry: TagRegistry;
    asTagLikeParser(): TagLikeParser;
    codec(): Codec<WrappedText>;
    copy(): TagParser;
    parseComponent(arg0: TextNode, arg1: ParserContext): Component;
    parseComponent(arg0: string, arg1: ParserContext): Component;
    parseNode(arg0: TextNode): TextNode;
    parseNode(arg0: string): TextNode;
    parseNodes(arg0: TextNode): TextNode[];
    providerCreator(): (param0: TagRegistry) => TagLikeParser$Provider;
    register(arg0: TextTag): void;
    tagRegistry(): TagRegistry;
}