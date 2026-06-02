import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { HostToGuestRootNode } from '../../../../com/oracle/truffle/polyglot/HostToGuestRootNode.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotContextImpl$UncachedLocationNode extends HostToGuestRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(layer: PolyglotSharingLayer)
    executeImpl(languageContext: PolyglotLanguageContext, receiver: Object, args: Object[]): Object;
    getReceiverType(): Class<Object>;
    isInternal(): boolean;
}