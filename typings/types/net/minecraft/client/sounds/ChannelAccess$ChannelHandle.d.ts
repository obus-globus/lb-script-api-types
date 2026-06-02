import type { Channel } from '../../../../com/mojang/blaze3d/audio/Channel.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChannelAccess$ChannelHandle extends Object {
    constructor(null_: ChannelAccess$ChannelHandle, channel: Channel)
    // private channel: Channel;
    readonly stopped: boolean;
    execute(action: (param0: Channel) => void): void;
    isStopped(): boolean;
    release(): void;
}