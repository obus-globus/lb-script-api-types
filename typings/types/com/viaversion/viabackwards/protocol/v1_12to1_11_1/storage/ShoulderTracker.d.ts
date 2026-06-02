import type { StoredObject } from '../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
export class ShoulderTracker extends StoredObject {
    constructor(arg0: UserConnection)
    readonly entityId: number;
    readonly leftShoulder: string;
    readonly rightShoulder: string;
    // private generateString(): string;
    getEntityId(): number;
    getLeftShoulder(): string;
    // private getName(arg0: string): string;
    getRightShoulder(): string;
    setEntityId(arg0: number): void;
    setLeftShoulder(arg0: string): void;
    setRightShoulder(arg0: string): void;
    toString(): string;
    update(): void;
}