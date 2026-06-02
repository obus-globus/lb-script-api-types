import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Session extends Object {
    constructor(username: string, uuid: UUID, token: string, type: string)
    readonly token: string;
    readonly type: string;
    readonly username: string;
    readonly uuid: UUID;
    component1(): string;
    component2(): UUID;
    component3(): string;
    component4(): string;
    copy(username: string, uuid: UUID, token: string, type: string): Session;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}