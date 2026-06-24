import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ResolutionContext } from '../../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { BookContent } from '../../../../../net/minecraft/world/item/component/BookContent.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class WrittenBookContent extends Record implements BookContent<Component, WrittenBookContent>, TooltipProvider {
    static CODEC: Codec<WrittenBookContent>;
    static CONTENT_CODEC: Codec<Component>;
    static EMPTY: WrittenBookContent;
    static MAX_GENERATION: number;
    static PAGES_CODEC: Codec<Filterable<Component>[]>;
    static PAGE_LENGTH: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, WrittenBookContent>;
    static TITLE_LENGTH: number;
    static TITLE_MAX_LENGTH: number;
    static pagesCodec(paramcontentCodec: Codec<Component>): Codec<Filterable<Component>[]>;
    static resolveForItem(paramitemStack: ItemStack, paramcontext: ResolutionContext, paramregistries: HolderLookup$Provider): boolean;
    constructor(title: Filterable<string>, author: string, generation: number, pages: Filterable<Component>[], resolved: boolean)
    // private author: string;
    // private generation: number;
    // private pages: Filterable<Component>[];
    // private resolved: boolean;
    // private title: Filterable<string>;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    author(): string;
    craftCopy(): WrittenBookContent;
    equals(o: Object | null): boolean;
    generation(): number;
    getPages(filterEnabled: boolean): Component[];
    hashCode(): number;
    markResolved(): WrittenBookContent;
    pages(): Filterable<Component>[];
    resolve(context: ResolutionContext, registries: HolderLookup$Provider): WrittenBookContent;
    resolved(): boolean;
    title(): Filterable<string>;
    toString(): string;
    withReplacedPages(newPages: Filterable<Component>[]): WrittenBookContent;
}