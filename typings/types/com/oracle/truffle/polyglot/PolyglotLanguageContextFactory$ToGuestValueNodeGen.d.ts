import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageContext$ToGuestValueNode } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext$ToGuestValueNode.d.ts'
import type { PolyglotLanguageContextFactory$ToGuestValueNodeGen$CachedData } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContextFactory$ToGuestValueNodeGen$CachedData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotLanguageContextFactory$ToGuestValueNodeGen extends PolyglotLanguageContext$ToGuestValueNode {
    static create(): PolyglotLanguageContext$ToGuestValueNode;
    static getUncached(): PolyglotLanguageContext$ToGuestValueNode;
    static inline(paramtarget: InlineSupport$InlineTarget): PolyglotLanguageContext$ToGuestValueNode;
    private constructor()
    // private cached_cache: PolyglotLanguageContextFactory$ToGuestValueNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: PolyglotLanguageContext, arg2Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: PolyglotLanguageContext, arg2Value: Object): Object;
}