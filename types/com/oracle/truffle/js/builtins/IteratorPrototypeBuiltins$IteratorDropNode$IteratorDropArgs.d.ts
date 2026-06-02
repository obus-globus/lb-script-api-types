import type { IteratorPrototypeBuiltins$IteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorArgs.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
export class IteratorPrototypeBuiltins$IteratorDropNode$IteratorDropArgs extends IteratorPrototypeBuiltins$IteratorArgs {
    constructor(target: IteratorRecord, limit: number)
    remaining: number;
}