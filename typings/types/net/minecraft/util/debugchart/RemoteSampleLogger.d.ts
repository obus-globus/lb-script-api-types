import type { ServerDebugSubscribers } from '../../../../net/minecraft/util/debug/ServerDebugSubscribers.d.ts'
import type { AbstractSampleLogger } from '../../../../net/minecraft/util/debugchart/AbstractSampleLogger.d.ts'
import type { RemoteDebugSampleType } from '../../../../net/minecraft/util/debugchart/RemoteDebugSampleType.d.ts'
export class RemoteSampleLogger extends AbstractSampleLogger {
    constructor(dimensions: number, subscribers: ServerDebugSubscribers, sampleType: RemoteDebugSampleType)
    constructor(dimensions: number, subscribers: ServerDebugSubscribers, sampleType: RemoteDebugSampleType, defaults: number[])
    // private sampleType: RemoteDebugSampleType;
    // private subscribers: ServerDebugSubscribers;
    useSample(): void;
}