import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Table<R extends unknown, C extends unknown, V extends unknown> extends Object{
    cellSet(): Table$Cell<R, C, V>[];
    clear(): void;
    column(columnKey: C): JavaMap<R, V>;
    columnKeySet(): C[];
    columnMap(): JavaMap<C, JavaMap<R, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    get(rowKey: Object, columnKey: Object): V;
    isEmpty(): boolean;
    put(rowKey: R, columnKey: C, value: V): V;
    putAll(table: Table<R, C, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: R): JavaMap<C, V>;
    rowKeySet(): R[];
    rowMap(): JavaMap<R, JavaMap<C, V>>;
    size(): number;
    values(): V[];
}