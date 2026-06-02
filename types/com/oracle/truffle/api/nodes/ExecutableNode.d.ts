import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExecutableNode extends Node {
    constructor(language: TruffleLanguage<Object>)
    // private polyglotRef: Object;
    applyEngineRef(node: ExecutableNode): void;
    execute(frame: VirtualFrame): Object;
    getLanguage(): TruffleLanguage<Object>;
    getLanguage<C extends TruffleLanguage<Object>>(languageClass: Class<C>): C;
    getLanguageInfo(): LanguageInfo;
    getSharingLayer(): Object;
    setSharingLayer(layer: Object): void;
}