import type { ParserContext$Key } from '../../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { Placeholders$PlaceholderGetter } from '../../../../../eu/pb4/placeholders/api/Placeholders$PlaceholderGetter.d.ts'
import type { ServerPlaceholderContext } from '../../../../../eu/pb4/placeholders/api/ServerPlaceholderContext.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { MarkdownLiteParserV1$MarkdownFormat } from '../../../../../eu/pb4/placeholders/api/parsers/MarkdownLiteParserV1$MarkdownFormat.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { TagLikeParser$Format } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format.d.ts'
import type { TagLikeParser$Provider } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Provider.d.ts'
import type { TagRegistry } from '../../../../../eu/pb4/placeholders/api/parsers/tag/TagRegistry.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatFormatting } from '../../../../../net/minecraft/ChatFormatting.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ParserBuilder extends Object {
    static of(): ParserBuilder;
    constructor()
    // private customTagRegistry: TagRegistry;
    // private hasLegacy: boolean;
    // private legacyFormatting: ChatFormatting[];
    // private legacyRGB: boolean;
    // private parserList: NodeParser[];
    // private quickText: boolean;
    // private safeOnly: boolean;
    // private simplifiedTextFormat: boolean;
    // private staticPreParsing: boolean;
    // private tagLike: Map<TagLikeParser$Format, TagLikeParser$Provider>;
    add(arg0: NodeParser): ParserBuilder;
    build(): NodeParser;
    clientPlaceholders(): ParserBuilder;
    clientPlaceholders(arg0: TagLikeParser$Format): ParserBuilder;
    commonPlaceholders(): ParserBuilder;
    commonPlaceholders(arg0: TagLikeParser$Format): ParserBuilder;
    commonPlaceholders(arg0: TagLikeParser$Format, arg1: ParserContext$Key<PlaceholderContext>): ParserBuilder;
    customTagRegistry(arg0: TagRegistry): ParserBuilder;
    customTags(arg0: TagLikeParser$Format, arg1: TagLikeParser$Provider): ParserBuilder;
    forceAdd(arg0: NodeParser): ParserBuilder;
    legacy(arg0: boolean, arg1: ChatFormatting[]): ParserBuilder;
    legacyAll(): ParserBuilder;
    legacyColor(): ParserBuilder;
    legacyVanillaColor(): ParserBuilder;
    markdown(): ParserBuilder;
    markdown(arg0: (param0: TextNode[]) => TextNode, arg1: (param0: TextNode[]) => TextNode, arg2: (param0: TextNode[], param1: TextNode) => TextNode, arg3: MarkdownLiteParserV1$MarkdownFormat[]): ParserBuilder;
    markdown(arg0: MarkdownLiteParserV1$MarkdownFormat[]): ParserBuilder;
    placeholders<Ctx extends unknown>(arg0: TagLikeParser$Format, arg1: ParserContext$Key<Ctx>, arg2: Placeholders$PlaceholderGetter<Ctx>): ParserBuilder;
    placeholders(arg0: TagLikeParser$Format, arg1: ParserContext$Key<(param0: string) => Component>): ParserBuilder;
    placeholders(arg0: TagLikeParser$Format, arg1: (param0: string) => TextNode): ParserBuilder;
    placeholders(arg0: TagLikeParser$Format, arg1: string[], arg2: ParserContext$Key<(param0: string) => Component>): ParserBuilder;
    quickText(): ParserBuilder;
    requireSafe(): ParserBuilder;
    serverPlaceholders(): ParserBuilder;
    serverPlaceholders(arg0: TagLikeParser$Format): ParserBuilder;
    serverPlaceholders(arg0: TagLikeParser$Format, arg1: ParserContext$Key<ServerPlaceholderContext>): ParserBuilder;
    simplifiedTextFormat(): ParserBuilder;
    staticPreParsing(): ParserBuilder;
}