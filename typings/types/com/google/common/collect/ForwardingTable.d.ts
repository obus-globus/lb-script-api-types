import type { ForwardingObject } from '../../../../com/google/common/collect/ForwardingObject.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingTable<R extends unknown, C extends unknown, V extends unknown> extends ForwardingObject implements Table<R, C, V> {
    constructor()
    cellSet(): Table$Cell<R, C, V>[];
    clear(): void;
    column(columnKey: C): Map<R, V>;
    columnKeySet(): C[];
    columnMap(): Map<C, Map<R, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    delegate(): Table<R, C, V>;
    equals(obj: Object | null): boolean;
    get(rowKey: Object, columnKey: Object): V;
    hashCode(): number;
    isEmpty(): boolean;
    put(rowKey: R, columnKey: C, value: V): V;
    putAll(table: Table<R, C, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: R): Map<C, V>;
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
    size(): number;
    values(): V[];
}