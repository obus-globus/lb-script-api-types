import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotToHostNode } from '../../../../com/oracle/truffle/polyglot/PolyglotToHostNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$AbstractHostLanguageService } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostLanguageService.d.ts'
export class PolyglotToHostNodeGen$Inlined extends PolyglotToHostNode implements UnadoptableNode {
    private constructor(target: InlineSupport$InlineTarget)
    // private host_: InlineSupport$ReferenceField<AbstractPolyglotImpl$AbstractHostLanguageService>;
    // private state_0_: InlineSupport$StateField;
    // private toHostNode_: Node;
    // private toHostNode__field1_: InlineSupport$ReferenceField<Node>;
    execute(arg0Value: Node, arg1Value: PolyglotLanguageContext, arg2Value: Object, arg3Value: Class<Object>, arg4Value: Type): Object;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: PolyglotLanguageContext, arg2Value: Object, arg3Value: Class<Object>, arg4Value: Type): Object;
}