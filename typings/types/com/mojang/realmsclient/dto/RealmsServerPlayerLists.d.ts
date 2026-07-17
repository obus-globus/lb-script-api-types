import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResolvableProfile } from '../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
export class RealmsServerPlayerLists extends Record {
    static parse(paramjson: string): RealmsServerPlayerLists;
    constructor(servers: JavaMap<number, ResolvableProfile[]>)
    // private servers: JavaMap<number, ResolvableProfile[]>;
    equals(o: Object | null): boolean;
    getProfileResultsFor(serverId: number): ResolvableProfile[];
    hashCode(): number;
    servers(): JavaMap<number, ResolvableProfile[]>;
    toString(): string;
}