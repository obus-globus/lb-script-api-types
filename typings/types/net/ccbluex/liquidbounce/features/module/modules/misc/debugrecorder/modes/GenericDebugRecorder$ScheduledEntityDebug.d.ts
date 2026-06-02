import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class GenericDebugRecorder$ScheduledEntityDebug extends Object {
    constructor(ticksLeft: number, entityId: number)
    readonly entityId: number;
    ticksLeft: number;
    component1(): number;
    component2(): number;
    copy(ticksLeft: number, entityId: number): GenericDebugRecorder$ScheduledEntityDebug;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}