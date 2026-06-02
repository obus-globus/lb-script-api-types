import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pagination } from '../../../../../../net/ccbluex/liquidbounce/api/models/pagination/Pagination.d.ts'
export class PaginatedResponse<T extends Object | number | string | boolean> extends Object {
    constructor(items: T[], pagination: Pagination)
    readonly items: T[];
    readonly pagination: Pagination;
    component1(): T[];
    component2(): Pagination;
    copy(items: T[], pagination: Pagination): PaginatedResponse<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}