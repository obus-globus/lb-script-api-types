import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotThreadTask$ThreadSpawnRootNode extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    static lookup(paramlanguageInstance: PolyglotLanguageInstance): CallTarget;
    constructor(languageInstance: PolyglotLanguageInstance)
    execute(frame: VirtualFrame): Object;
    isInternal(): boolean;
}