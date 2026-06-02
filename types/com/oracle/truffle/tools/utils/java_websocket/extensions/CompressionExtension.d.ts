import type { DefaultExtension } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/extensions/DefaultExtension.d.ts'
import type { Framedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
export abstract class CompressionExtension extends DefaultExtension {
    constructor()
    isFrameValid(arg0: Framedata): void;
}