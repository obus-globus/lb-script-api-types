import type { AsyncContext } from '../../../../../com/oracle/truffle/js/runtime/objects/AsyncContext.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JobCallback extends Record {
    constructor(callback: Object, asyncContextSnapshot: AsyncContext)
    constructor(callback: Object, asyncContextSnapshot: AsyncContext, hostDefined: Object)
    // private asyncContextSnapshot: AsyncContext;
    // private callback: Object;
    // private hostDefined: Object;
    asyncContextSnapshot(): AsyncContext;
    callback(): Object;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hostDefined(): Object;
    toString(): string;
}