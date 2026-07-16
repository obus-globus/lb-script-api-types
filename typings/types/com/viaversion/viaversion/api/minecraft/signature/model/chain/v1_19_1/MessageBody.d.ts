import type { PlayerMessageSignature } from '../../../../../../../../../com/viaversion/viaversion/api/minecraft/PlayerMessageSignature.d.ts'
import type { DecoratableMessage } from '../../../../../../../../../com/viaversion/viaversion/api/minecraft/signature/model/DecoratableMessage.d.ts'
import type { DataConsumer } from '../../../../../../../../../com/viaversion/viaversion/api/minecraft/signature/util/DataConsumer.d.ts'
import type { Instant } from '../../../../../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class MessageBody extends Object {
    constructor(arg0: DecoratableMessage, arg1: Instant, arg2: number, arg3: PlayerMessageSignature[])
    // private content: DecoratableMessage;
    // private lastSeenMessages: PlayerMessageSignature[];
    // private salt: number;
    // private timestamp: Instant;
    update(arg0: (param0: number[]) => void): void;
}