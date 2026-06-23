import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ForEachIndexCallNode$MaybeResult<T extends unknown> extends Object {
    static continueResult(paramresult: Object | null): ForEachIndexCallNode$MaybeResult<Object>;
    static returnResult(paramresult: Object | null): ForEachIndexCallNode$MaybeResult<Object>;
    constructor(result: T, resultPresent: boolean)
    // private result: T;
    // private resultPresent: boolean;
    get(): T;
    isPresent(): boolean;
}