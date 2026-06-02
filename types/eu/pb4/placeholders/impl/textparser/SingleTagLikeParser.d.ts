import type { ParserContext$Key } from '../../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { Placeholders$PlaceholderGetter } from '../../../../../eu/pb4/placeholders/api/Placeholders$PlaceholderGetter.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { TagLikeParser } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser.d.ts'
import type { TagLikeParser$Context } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Context.d.ts'
import type { TagLikeParser$Format } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format.d.ts'
import type { TagLikeParser$Provider } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Provider.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class SingleTagLikeParser extends TagLikeParser {
    static NOOP: NodeParser;
    static PLACEHOLDER: TagLikeParser$Format;
    static PLACEHOLDER_ALTERNATIVE: TagLikeParser$Format;
    static PLACEHOLDER_ALTERNATIVE_DOUBLE: TagLikeParser$Format;
    static PLACEHOLDER_USER: TagLikeParser$Format;
    static TAGS: TagLikeParser$Format;
    static TAGS_LEGACY: TagLikeParser$Format;
    static TAGS_LENIENT: TagLikeParser$Format;
    static of(paramarg0: TagLikeParser$Format, paramarg1: TagLikeParser$Provider): TagLikeParser;
    static of(paramarg0: Map<TagLikeParser$Format, TagLikeParser$Provider>): TagLikeParser;
    static of(paramarg0: Object | null): TagLikeParser;
    static placeholder(paramarg0: TagLikeParser$Format, paramarg1: ParserContext$Key<Object>, paramarg2: Placeholders$PlaceholderGetter<Object>): TagLikeParser;
    static placeholder(paramarg0: TagLikeParser$Format, paramarg1: (param0: string) => TextNode): TagLikeParser;
    static placeholderText(paramarg0: TagLikeParser$Format, paramarg1: ParserContext$Key<Object>): TagLikeParser;
    static placeholderText(paramarg0: TagLikeParser$Format, paramarg1: string[], paramarg2: ParserContext$Key<Object>): TagLikeParser;
    static placeholderText(paramarg0: TagLikeParser$Format, paramarg1: (param0: string) => Component): TagLikeParser;
    constructor(arg0: TagLikeParser$Format, arg1: TagLikeParser$Provider)
    // private format: TagLikeParser$Format;
    // private provider: TagLikeParser$Provider;
    format(): TagLikeParser$Format;
    handleLiteral(arg0: string, arg1: TagLikeParser$Context): void;
    provider(): TagLikeParser$Provider;
}