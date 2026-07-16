import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ForEachIndexCallNode$MaybeResult<T extends unknown> extends Object {
    static continueResult<T extends unknown>(paramresult: T): ForEachIndexCallNode$MaybeResult<T>;
    static returnResult<T extends unknown>(paramresult: T): ForEachIndexCallNode$MaybeResult<T>;
    constructor(result: T, resultPresent: boolean)
    // private result: T;
    // private resultPresent: boolean;
    get(): T;
    isPresent(): boolean;
}