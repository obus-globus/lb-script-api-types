import type { ParserContext$Key } from '../../../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { Placeholders$PlaceholderGetter } from '../../../../../../eu/pb4/placeholders/api/Placeholders$PlaceholderGetter.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { TagLikeParser$Context } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Context.d.ts'
import type { TagLikeParser$Format$Tag } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format$Tag.d.ts'
import type { TagLikeParser$Provider } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Provider.d.ts'
import type { TagRegistry } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TagRegistry.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class LegacyProvider extends Record implements TagLikeParser$Provider {
    static placeholder(paramarg0: ParserContext$Key<Object>, paramarg1: Placeholders$PlaceholderGetter<Object>): TagLikeParser$Provider;
    static placeholder(paramarg0: ParserContext$Key<(param0: string) => Component>): TagLikeParser$Provider;
    static placeholder(paramarg0: string[], paramarg1: ParserContext$Key<(param0: string) => Component>): TagLikeParser$Provider;
    static placeholder(paramarg0: (param0: string) => TextNode): TagLikeParser$Provider;
    static placeholderText(paramarg0: (param0: string) => Component): TagLikeParser$Provider;
    constructor(registry: TagRegistry)
    // private registry: TagRegistry;
    equals(arg0: Object | null): boolean;
    handleTag(arg0: string, arg1: string, arg2: TagLikeParser$Context): void;
    hashCode(): number;
    isValidTag(arg0: string, arg1: TagLikeParser$Context): boolean;
    modifyTag(arg0: TagLikeParser$Format$Tag, arg1: TagLikeParser$Context): TagLikeParser$Format$Tag;
    registry(): TagRegistry;
    toString(): string;
}