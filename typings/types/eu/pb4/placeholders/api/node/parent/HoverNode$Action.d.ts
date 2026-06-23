import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { HoverNode$EntityNodeContent } from '../../../../../../eu/pb4/placeholders/api/node/parent/HoverNode$EntityNodeContent.d.ts'
import type { HoverNode$LazyItemStackNodeContent } from '../../../../../../eu/pb4/placeholders/api/node/parent/HoverNode$LazyItemStackNodeContent.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HoverEvent$Action } from '../../../../../../net/minecraft/network/chat/HoverEvent$Action.d.ts'
import type { HoverEvent$ShowEntity } from '../../../../../../net/minecraft/network/chat/HoverEvent$ShowEntity.d.ts'
import type { HoverEvent$ShowItem } from '../../../../../../net/minecraft/network/chat/HoverEvent$ShowItem.d.ts'
import type { HoverEvent$ShowText } from '../../../../../../net/minecraft/network/chat/HoverEvent$ShowText.d.ts'
export class HoverNode$Action<T extends unknown, H extends unknown> extends Record {
    static ENTITY_NODE: HoverNode$Action<HoverNode$EntityNodeContent, HoverEvent$ShowEntity>;
    static LAZY_ITEM_STACK: HoverNode$Action<HoverNode$LazyItemStackNodeContent<Object>, HoverEvent$ShowItem>;
    static TEXT_NODE: HoverNode$Action<TextNode, HoverEvent$ShowText>;
    static VANILLA_ENTITY: HoverNode$Action<HoverEvent$ShowEntity, HoverEvent$ShowEntity>;
    static VANILLA_ITEM_STACK: HoverNode$Action<HoverEvent$ShowItem, HoverEvent$ShowItem>;
    constructor(vanillaType: HoverEvent$Action)
    // private vanillaType: HoverEvent$Action;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    vanillaType(): HoverEvent$Action;
}