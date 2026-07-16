import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GlobalScopeLookupNode extends JavaScriptBaseNode {
    static create(paramvarName: TruffleString, paramwrite: boolean): GlobalScopeLookupNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(varName: TruffleString, write: boolean)
    // private varName: TruffleString;
    // private write: boolean;
    doCached(scope: JSDynamicObject, cachedShape: Shape, exists: boolean, dead: boolean, constAssignment: boolean, cacheLimit: number): boolean;
    doUncached(scope: JSDynamicObject, errorBranch: InlinedBranchProfile): boolean;
    execute(scope: Object): boolean;
    getAbsentPropertyAssumption(shape: Shape): Assumption;
    getPropertyCacheLimit(): number;
    isConstAssignment(shape: Shape): boolean;
    isDead(shape: Shape): boolean;
}