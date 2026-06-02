import type { WebSocketFrameMaskGenerator } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameMaskGenerator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RandomWebSocketFrameMaskGenerator extends Object implements WebSocketFrameMaskGenerator {
    static INSTANCE: RandomWebSocketFrameMaskGenerator;
    private constructor()
    nextMask(): number;
}