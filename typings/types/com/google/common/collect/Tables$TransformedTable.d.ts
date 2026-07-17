import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { AbstractTable } from '../../../../com/google/common/collect/AbstractTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Tables$TransformedTable<R extends unknown, C extends unknown, V1 extends unknown, V2 extends unknown> extends AbstractTable<R, C, V2> {
    constructor(fromTable: Table<R, C, V1>, function_: (param0: V1) => V2)
    // private fromTable: Table<R, C, V1>;
    // private function: (param0: V1) => V2;
    applyToValue(cell: Table$Cell<R, C, V1>): Table$Cell<R, C, V2>;
    cellIterator(): Iterator<Table$Cell<R, C, V2>>;
    cellSpliterator(): Spliterator<Table$Cell<R, C, V2>>;
    clear(): void;
    column(columnKey: C): JavaMap<R, V2>;
    columnKeySet(): C[];
    columnMap(): JavaMap<C, JavaMap<R, V2>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    createValues(): V2[];
    get(rowKey: Object, columnKey: Object): V2;
    put(rowKey: R, columnKey: C, value: V2): V2;
    putAll(table: Table<R, C, V2>): void;
    remove(rowKey: Object, columnKey: Object): V2;
    row(rowKey: R): JavaMap<C, V2>;
    rowKeySet(): R[];
    rowMap(): JavaMap<R, JavaMap<C, V2>>;
    size(): number;
}