import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Tables$AbstractCell<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Table$Cell<R, C, V> {
    constructor()
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}