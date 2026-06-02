import type { IteratorPrototypeBuiltins$IteratorWithCounterArgs } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorWithCounterArgs.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IteratorPrototypeBuiltins$IteratorFlatMapNode$IteratorFlatMapArgs extends IteratorPrototypeBuiltins$IteratorWithCounterArgs {
    constructor(target: IteratorRecord, mapper: Object)
    innerAlive: boolean;
    innerIterator: IteratorRecord;
    mapper: Object;
}