import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { FramedataImpl1 } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/FramedataImpl1.d.ts'
export abstract class ControlFrame extends FramedataImpl1 {
    static get(paramarg0: Opcode): FramedataImpl1;
    constructor(arg0: Opcode)
    isValid(): void;
}