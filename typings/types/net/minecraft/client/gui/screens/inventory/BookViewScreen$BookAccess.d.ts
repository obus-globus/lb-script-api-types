import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class BookViewScreen$BookAccess extends Record {
    static fromItem(paramitemStack: ItemStack): BookViewScreen$BookAccess;
    constructor(pages: Component[])
    // private pages: Component[];
    equals(o: Object | null): boolean;
    getPage(page: number): Component;
    getPageCount(): number;
    hashCode(): number;
    pages(): Component[];
    toString(): string;
}