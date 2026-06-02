import type { IteratorPrototypeBuiltins$IteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorArgs.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
export class IteratorPrototypeBuiltins$IteratorWithCounterArgs extends IteratorPrototypeBuiltins$IteratorArgs {
    constructor(iterated: IteratorRecord)
    counter: number;
}