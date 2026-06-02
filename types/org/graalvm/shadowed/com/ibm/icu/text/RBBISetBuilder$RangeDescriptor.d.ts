import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RBBINode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBINode.d.ts'
export class RBBISetBuilder$RangeDescriptor extends Object {
    constructor()
    constructor(other: RBBISetBuilder$RangeDescriptor)
    // private fEndChar: number;
    // private fFirstInGroup: boolean;
    // private fIncludesDict: boolean;
    // private fIncludesSets: RBBINode[];
    // private fNext: RBBISetBuilder$RangeDescriptor;
    // private fNum: number;
    // private fStartChar: number;
    isDictionaryRange(): boolean;
    split(where: number): void;
}