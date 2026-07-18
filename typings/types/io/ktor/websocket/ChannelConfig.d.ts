import type { ChannelConfig$Companion } from '../../../io/ktor/websocket/ChannelConfig$Companion.d.ts'
import type { ChannelOverflow } from '../../../io/ktor/websocket/ChannelOverflow.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ChannelConfig extends Object {
    static Companion: ChannelConfig$Companion;
    constructor(capacity: number, onOverflow: ChannelOverflow)
    readonly canSuspend: boolean;
    readonly capacity: number;
    readonly onOverflow: ChannelOverflow;
}