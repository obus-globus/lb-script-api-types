import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricStatusTree$FabricStatusNode } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricStatusNode.d.ts'
export class FabricMainWindow$IconInfo extends Object {
    static fromNode(paramarg0: FabricStatusTree$FabricStatusNode): FabricMainWindow$IconInfo;
    constructor(arg0: string)
    constructor(arg0: string, arg1: string[])
    decor: string[];
    // private hash: number;
    mainPath: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}