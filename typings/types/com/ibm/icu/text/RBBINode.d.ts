import type { Object } from '../../../../java/lang/Object.d.ts'
export class RBBINode extends Object {
    constructor(arg0: RBBINode)
    constructor(arg0: number)
    // private fChainIn: boolean;
    // private fFirstPos: number;
    // private fFirstPosSet: RBBINode[];
    // private fFollowPos: RBBINode[];
    // private fInputSet: string[];
    // private fLastPos: number;
    // private fLastPosSet: RBBINode[];
    // private fLeftChild: RBBINode;
    // private fLookAheadEnd: boolean;
    // private fNullable: boolean;
    // private fParent: RBBINode;
    // private fPrecedence: number;
    // private fRightChild: RBBINode;
    // private fRuleRoot: boolean;
    // private fSerialNum: number;
    // private fText: string;
    // private fType: number;
    // private fVal: number;
    cloneTree(): RBBINode;
    findNodes(arg0: RBBINode[], arg1: number): void;
    flattenSets(): void;
    flattenVariables(arg0: number): RBBINode;
    printTree(arg0: boolean): void;
}