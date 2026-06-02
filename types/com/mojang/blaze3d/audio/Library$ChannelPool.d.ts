import type { Channel } from '../../../../com/mojang/blaze3d/audio/Channel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Library$ChannelPool extends Object{
    acquire(): Channel;
    cleanup(): void;
    getMaxCount(): number;
    getUsedCount(): number;
    release(channel: Channel): boolean;
}