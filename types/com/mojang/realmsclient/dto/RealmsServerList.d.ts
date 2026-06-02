import type { GuardedSerializer } from '../../../../com/mojang/realmsclient/dto/GuardedSerializer.d.ts'
import type { RealmsServer } from '../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsServerList extends Record implements ReflectionBasedSerialization {
    static parse(paramgson: GuardedSerializer, paramjson: string): RealmsServerList;
    constructor(servers: RealmsServer[])
    // private servers: RealmsServer[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    servers(): RealmsServer[];
    toString(): string;
}