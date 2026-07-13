import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureProperty } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/TextureProperty.d.ts'
export class SessionProfile extends Record {
    constructor(id: string, name: string, legacy: boolean | null, properties: TextureProperty[])
    // private id: string;
    /*not mapped: */ id(): string;
    // private legacy: boolean | null;
    /*not mapped: */ legacy(): boolean | null;
    // private name: string;
    /*not mapped: */ name(): string;
    // private properties: TextureProperty[];
    /*not mapped: */ properties(): TextureProperty[];
    component1(): string;
    component2(): string;
    component3(): boolean | null;
    component4(): TextureProperty[];
    copy(id: string, name: string, legacy: boolean | null, properties: TextureProperty[]): SessionProfile;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}