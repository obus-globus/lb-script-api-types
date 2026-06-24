import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
export class EntitySpawnRequest extends Record {
    constructor(reason: EntitySpawnReason, ignoreChecks: boolean)
    // private ignoreChecks: boolean;
    // private reason: EntitySpawnReason;
    equals(o: Object | null): boolean;
    hashCode(): number;
    ignoreChecks(): boolean;
    reason(): EntitySpawnReason;
    toString(): string;
}