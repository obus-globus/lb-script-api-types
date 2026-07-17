import type { IteratorPrototypeBuiltins$IteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorArgs.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { SimpleArrayList } from '../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IteratorFunctionBuiltins$IteratorZipArgs extends IteratorPrototypeBuiltins$IteratorArgs {
    constructor(iterators: SimpleArrayList<IteratorRecord>, mode: number, padding: Object[], keys: Object[])
    // private iterators: IteratorRecord[];
    // private keys: Object[];
    // private mode: number;
    // private openIterators: IteratorRecord[];
    // private openIteratorsCount: number;
    // private padding: Object[];
    keyed(): boolean;
    removeOpenIterator(index: number, openIterator: IteratorRecord): void;
}