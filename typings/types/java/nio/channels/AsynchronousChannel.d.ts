import type { Channel } from '../../../java/nio/channels/Channel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AsynchronousChannel extends Channel, Object{
    close(): void;
}