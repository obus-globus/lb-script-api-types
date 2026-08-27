import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ActorLinkType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ActorLinkType.d.ts'
export class EntityLink extends Record {
    constructor(fromEntityUniqueId: number, toEntityUniqueId: number, type: ActorLinkType, immediate: boolean, riderInitiated: boolean, vehicleAngularVelocity: number)
    // private fromEntityUniqueId: number;
    // private immediate: boolean;
    // private riderInitiated: boolean;
    // private toEntityUniqueId: number;
    // private type: ActorLinkType;
    // private vehicleAngularVelocity: number;
    equals(arg0: Object | null): boolean;
    fromEntityUniqueId(): number;
    hashCode(): number;
    immediate(): boolean;
    riderInitiated(): boolean;
    toEntityUniqueId(): number;
    toString(): string;
    type(): ActorLinkType;
    vehicleAngularVelocity(): number;
}