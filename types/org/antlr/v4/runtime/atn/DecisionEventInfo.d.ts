import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TokenStream } from '../../../../../org/antlr/v4/runtime/TokenStream.d.ts'
export class DecisionEventInfo extends Object {
    constructor(arg0: number, arg1: (Object | null)[], arg2: TokenStream, arg3: number, arg4: number, arg5: boolean)
    configs: (Object | null)[];
    decision: number;
    fullCtx: boolean;
    input: TokenStream;
    startIndex: number;
    stopIndex: number;
}