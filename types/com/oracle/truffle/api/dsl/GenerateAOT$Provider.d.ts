import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface GenerateAOT$Provider extends Object{
    prepareForAOT(language: TruffleLanguage<Object>, root: RootNode): void;
    prepareForAOT(language: TruffleLanguage<Object>, root: RootNode, inlinedNode: Node): void;
}