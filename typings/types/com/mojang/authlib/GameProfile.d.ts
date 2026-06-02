import type { PropertyMap } from '../../../com/mojang/authlib/properties/PropertyMap.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GameProfile extends Record {
    constructor(arg0: UUID, arg1: string)
    constructor(id: UUID, name: string, properties: PropertyMap)
    // private id: UUID;
    // private name: string;
    // private properties: PropertyMap;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    name(): string;
    properties(): PropertyMap;
    toString(): string;
}