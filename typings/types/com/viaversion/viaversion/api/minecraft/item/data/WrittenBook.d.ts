import type { FilterableComponent } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FilterableComponent.d.ts'
import type { FilterableString } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FilterableString.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WrittenBook extends Record implements Copyable {
    static TYPE: Type<WrittenBook>;
    constructor(title: FilterableString, author: string, generation: number, pages: FilterableComponent[], resolved: boolean)
    // private author: string;
    // private generation: number;
    // private pages: FilterableComponent[];
    // private resolved: boolean;
    // private title: FilterableString;
    author(): string;
    copy(): WrittenBook;
    equals(arg0: Object | null): boolean;
    generation(): number;
    hashCode(): number;
    pages(): FilterableComponent[];
    resolved(): boolean;
    title(): FilterableString;
    toString(): string;
}