import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TotalCountResult$STATUS } from '../../../../../org/apache/tika/pipes/pipesiterator/TotalCountResult$STATUS.d.ts'
export class TotalCountResult extends Object {
    static UNSUPPORTED: TotalCountResult;
    constructor()
    constructor(arg0: number, arg1: TotalCountResult$STATUS)
    readonly status: TotalCountResult$STATUS;
    readonly totalCount: number;
    getStatus(): TotalCountResult$STATUS;
    getTotalCount(): number;
    toString(): string;
}