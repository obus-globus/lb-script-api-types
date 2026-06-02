import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { ControlFrame } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/ControlFrame.d.ts'
import type { FramedataImpl1 } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/FramedataImpl1.d.ts'
export class PingFrame extends ControlFrame {
    static get(paramarg0: Opcode): FramedataImpl1;
    constructor()
}