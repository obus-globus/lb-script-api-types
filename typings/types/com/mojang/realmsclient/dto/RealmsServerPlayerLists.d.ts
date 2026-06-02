import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResolvableProfile } from '../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
export class RealmsServerPlayerLists extends Record {
    static parse(paramjson: string): RealmsServerPlayerLists;
    constructor(servers: { [key: number]: ResolvableProfile[] })
    // private servers: { [key: number]: ResolvableProfile[] };
    equals(o: Object | null): boolean;
    getProfileResultsFor(serverId: number): ResolvableProfile[];
    hashCode(): number;
    servers(): { [key: number]: ResolvableProfile[] };
    toString(): string;
}