import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { ParserContext$Key } from '../../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { Placeholders$PlaceholderGetter } from '../../../../../eu/pb4/placeholders/api/Placeholders$PlaceholderGetter.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { ParserBuilder } from '../../../../../eu/pb4/placeholders/api/parsers/ParserBuilder.d.ts'
import type { TagLikeParser$Context } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Context.d.ts'
import type { TagLikeParser$Format } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format.d.ts'
import type { TagLikeParser$Format$Tag } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format$Tag.d.ts'
import type { TagLikeParser$Provider } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Provider.d.ts'
import type { TagLikeWrapper } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeWrapper.d.ts'
import type { WrappedText } from '../../../../../eu/pb4/placeholders/api/parsers/WrappedText.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class TagLikeParser extends Object implements NodeParser, TagLikeWrapper {
    static NOOP: NodeParser;
    static PLACEHOLDER: TagLikeParser$Format;
    static PLACEHOLDER_ALTERNATIVE: TagLikeParser$Format;
    static PLACEHOLDER_ALTERNATIVE_DOUBLE: TagLikeParser$Format;
    static PLACEHOLDER_USER: TagLikeParser$Format;
    static TAGS: TagLikeParser$Format;
    static TAGS_LEGACY: TagLikeParser$Format;
    static TAGS_LENIENT: TagLikeParser$Format;
    static builder(): ParserBuilder;
    static merge(paramarg0: (Object | null)[]): NodeParser;
    static merge(paramarg0: NodeParser[]): NodeParser;
    static of(paramarg0: TagLikeParser$Format, paramarg1: TagLikeParser$Provider): TagLikeParser;
    static of(paramarg0: Map<TagLikeParser$Format, TagLikeParser$Provider>): TagLikeParser;
    static of(paramarg0: Object | null): TagLikeParser;
    static placeholder(paramarg0: TagLikeParser$Format, paramarg1: ParserContext$Key<Object>, paramarg2: Placeholders$PlaceholderGetter<Object>): TagLikeParser;
    static placeholder(paramarg0: TagLikeParser$Format, paramarg1: (param0: string) => TextNode): TagLikeParser;
    static placeholderText(paramarg0: TagLikeParser$Format, paramarg1: ParserContext$Key<(param0: string) => Component>): TagLikeParser;
    static placeholderText(paramarg0: TagLikeParser$Format, paramarg1: string[], paramarg2: ParserContext$Key<(param0: string) => Component>): TagLikeParser;
    static placeholderText(paramarg0: TagLikeParser$Format, paramarg1: (param0: string) => Component): TagLikeParser;
    constructor()
    asTagLikeParser(): TagLikeParser;
    codec(): Codec<WrappedText>;
    handleLiteral(arg0: string, arg1: TagLikeParser$Context): void;
    handleTag(arg0: string, arg1: number, arg2: TagLikeParser$Format$Tag, arg3: TagLikeParser$Provider, arg4: TagLikeParser$Context): number;
    // private parse(arg0: TextNode, arg1: TagLikeParser$Context): void;
    parseComponent(arg0: TextNode, arg1: ParserContext): Component;
    parseComponent(arg0: string, arg1: ParserContext): Component;
    parseNode(arg0: TextNode): TextNode;
    parseNode(arg0: string): TextNode;
    parseNodes(arg0: TextNode): TextNode[];
}