import type { Object } from '../../../java/lang/Object.d.ts'
export class ChannelMetadata extends Object {
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    // private defaultMaxMessagesPerRead: number;
    // private hasDisconnect: boolean;
    defaultMaxMessagesPerRead(): number;
    hasDisconnect(): boolean;
}