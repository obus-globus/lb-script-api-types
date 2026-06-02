import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$InteropReadStringMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadStringMemberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexUtil$TRegexFlagsAccessor extends Object {
    static dotAll(paramregexFlagsObject: Object, paramnode: Node, paramreadDotAllNode: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    static global(paramregexFlagsObject: Object, paramnode: Node, paramreadGlobalNode: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    static hasIndices(paramregexFlagsObject: Object, paramnode: Node, paramreadHasIndicesNode: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    static ignoreCase(paramregexFlagsObject: Object, paramnode: Node, paramreadIgnoreCaseNode: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    static multiline(paramregexFlagsObject: Object, paramnode: Node, paramreadMultilineNode: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    static source(paramregexFlagsObject: Object, paramnode: Node, paramreadSourceNode: TRegexUtil$InteropReadStringMemberNode): Object;
    static sticky(paramregexFlagsObject: Object, paramnode: Node, paramreadStickyNode: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    static unicode(paramregexFlagsObject: Object, paramnode: Node, paramreadUnicodeNode: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    static unicodeSets(paramregexFlagsObject: Object, paramnode: Node, paramreadUnicodeSetsNode: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    private constructor()
}