import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class HostToGuestRootNode extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(language: PolyglotLanguageInstance)
    constructor(layer: PolyglotSharingLayer)
    // private language: PolyglotLanguage;
    // private layer: PolyglotSharingLayer;
    // private seenEnter: boolean;
    // private seenError: boolean;
    // private seenNonEnter: boolean;
    execute(frame: VirtualFrame): Object;
    executeImpl(languageContext: PolyglotLanguageContext, receiver: Object, args: Object[]): Object;
    getReceiverType(): Class<Object>;
    // private handleException<E extends Throwable>(languageContext: PolyglotLanguageContext, e: Throwable, entered: boolean, exceptionType: Class<E>): E;
}