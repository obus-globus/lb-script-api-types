import type { RootCallTarget } from '../../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { BytecodeLocation } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocation.d.ts'
import type { ContinuationRootNode } from '../../../../../com/oracle/truffle/api/bytecode/ContinuationRootNode.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContinuationResult extends Object implements TruffleObject {
    static create(paramrootNode: ContinuationRootNode, paramframe: MaterializedFrame, paramresult: Object): ContinuationResult;
    constructor(rootNode: ContinuationRootNode, frame: MaterializedFrame, result: Object)
    readonly frame: MaterializedFrame;
    readonly result: Object;
    // private rootNode: ContinuationRootNode;
    continueWith(value: Object): Object;
    getBytecodeLocation(): BytecodeLocation;
    getContinuationCallTarget(): RootCallTarget;
    getContinuationRootNode(): ContinuationRootNode;
    getFrame(): MaterializedFrame;
    getResult(): Object;
    toString(): string;
}