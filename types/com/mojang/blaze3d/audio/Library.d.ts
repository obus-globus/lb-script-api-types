import type { Channel } from '../../../../com/mojang/blaze3d/audio/Channel.d.ts'
import type { DeviceList } from '../../../../com/mojang/blaze3d/audio/DeviceList.d.ts'
import type { DeviceTracker } from '../../../../com/mojang/blaze3d/audio/DeviceTracker.d.ts'
import type { Library$ChannelPool } from '../../../../com/mojang/blaze3d/audio/Library$ChannelPool.d.ts'
import type { Library$Pool } from '../../../../com/mojang/blaze3d/audio/Library$Pool.d.ts'
import type { Listener } from '../../../../com/mojang/blaze3d/audio/Listener.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
export class Library extends Object {
    static NO_DEVICE: number;
    static createDeviceTracker(): DeviceTracker;
    constructor()
    // private context: number;
    // private currentDevice: number;
    // private currentDeviceName: string;
    readonly listener: Listener;
    // private staticChannels: Library$ChannelPool;
    // private streamingChannels: Library$ChannelPool;
    // private supportsDisconnections: boolean;
    acquireChannel(pool: Library$Pool): Channel;
    cleanup(): void;
    // private createAttributes(stack: MemoryStack, enableHrtf: boolean): IntBuffer;
    currentDeviceName(): string;
    // private getChannelCount(): number;
    getChannelDebugString(): string;
    getListener(): Listener;
    init(preferredDevice: string, currentDevices: DeviceList, useHrtf: boolean): void;
    isCurrentDeviceDisconnected(): boolean;
    releaseChannel(channel: Channel): void;
}