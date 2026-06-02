import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
export class AsyncIteratorPrototypeBuiltins$AsyncIteratorTakeNode$AsyncIteratorTakeArgs extends AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs {
    constructor(iterated: IteratorRecord, limit: number)
    remaining: number;
}