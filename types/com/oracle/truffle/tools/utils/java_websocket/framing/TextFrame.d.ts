import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { DataFrame } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/DataFrame.d.ts'
import type { FramedataImpl1 } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/FramedataImpl1.d.ts'
export class TextFrame extends DataFrame {
    static get(paramarg0: Opcode): FramedataImpl1;
    constructor()
    isValid(): void;
}