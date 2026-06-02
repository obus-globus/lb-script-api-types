import type { Channel } from '../../../../com/mojang/blaze3d/audio/Channel.d.ts'
import type { Library$ChannelPool } from '../../../../com/mojang/blaze3d/audio/Library$ChannelPool.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Library$CountingChannelPool extends Object implements Library$ChannelPool {
    constructor(limit: number)
    // private activeChannels: Channel[];
    // private limit: number;
    acquire(): Channel;
    cleanup(): void;
    getMaxCount(): number;
    getUsedCount(): number;
    release(channel: Channel): boolean;
}