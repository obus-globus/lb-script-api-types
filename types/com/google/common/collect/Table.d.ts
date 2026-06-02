import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Table<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    cellSet(): Table$Cell<R, C, V>[];
    clear(): void;
    column(columnKey: C): Map<R, V>;
    columnKeySet(): C[];
    columnMap(): Map<C, Map<R, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    get(rowKey: Object, columnKey: Object): V;
    isEmpty(): boolean;
    put(rowKey: R, columnKey: C, value: V): V;
    putAll(table: Table<R, C, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: R): Map<C, V>;
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
    size(): number;
    values(): E[];
}