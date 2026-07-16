import type { FilterableString } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FilterableString.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WritableBook extends Record implements Copyable {
    static TYPE: Type<WritableBook>;
    static copy<T extends unknown>(paramarg0: T): T;
    constructor(pages: FilterableString[])
    // private pages: FilterableString[];
    copy(): WritableBook;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    pages(): FilterableString[];
    toString(): string;
}