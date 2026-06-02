import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTrackerBase } from '../../../../../../com/viaversion/viaversion/data/entity/EntityTrackerBase.d.ts'
export class EntityTracker1_14 extends EntityTrackerBase {
    constructor(arg0: UserConnection)
    readonly chunkCenterX: number;
    readonly chunkCenterZ: number;
    readonly forceSendCenterChunk: boolean;
    readonly insentientData: Int2ObjectMap<number>;
    readonly latestTradeWindowId: number;
    // private playerEntityFlags: Int2ObjectMap<number>;
    // private sleepingAndRiptideData: Int2ObjectMap<number>;
    getChunkCenterX(): number;
    getChunkCenterZ(): number;
    getEntityFlags(arg0: number): number;
    getInsentientData(arg0: number): number;
    getLatestTradeWindowId(): number;
    isForceSendCenterChunk(): boolean;
    isRiptide(arg0: number): boolean;
    isSleeping(arg0: number): boolean;
    removeEntity(arg0: number): void;
    setChunkCenterX(arg0: number): void;
    setChunkCenterZ(arg0: number): void;
    setEntityFlags(arg0: number, arg1: number): void;
    setForceSendCenterChunk(arg0: boolean): void;
    setInsentientData(arg0: number, arg1: number): void;
    setLatestTradeWindowId(arg0: number): void;
    setRiptide(arg0: number, arg1: boolean): void;
    setSleeping(arg0: number, arg1: boolean): void;
}