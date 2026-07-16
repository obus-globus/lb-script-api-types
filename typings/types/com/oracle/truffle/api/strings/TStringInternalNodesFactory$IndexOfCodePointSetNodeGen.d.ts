import type { IndexOfCodePointSet$IndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfNode.d.ts'
import type { TStringInternalNodes$IndexOfCodePointSetNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$IndexOfCodePointSetNode.d.ts'
import type { TStringInternalNodesFactory$IndexOfCodePointSetNodeGen$DynamicStrideData } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodesFactory$IndexOfCodePointSetNodeGen$DynamicStrideData.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TStringInternalNodesFactory$IndexOfCodePointSetNodeGen extends TStringInternalNodes$IndexOfCodePointSetNode {
    static create(paramindexOfNodes: IndexOfCodePointSet$IndexOfNode[], paramencoding: TruffleString$Encoding): TStringInternalNodes$IndexOfCodePointSetNode;
    private constructor(indexOfNodes: IndexOfCodePointSet$IndexOfNode[], encoding: TruffleString$Encoding)
    // private dynamicStride_cache: TStringInternalNodesFactory$IndexOfCodePointSetNodeGen$DynamicStrideData;
    // private state_0_: number;
    execute(arg0Value: number[], arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number): number;
    // private executeAndSpecialize(arg0Value: number[], arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number): number;
}