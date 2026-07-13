import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CapeInfo } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/CapeInfo.d.ts'
import type { SkinInfo } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/SkinInfo.d.ts'
export class PlayerProfile extends Record {
    constructor(id: string, name: string, skins: SkinInfo[], capes: CapeInfo[])
    // private capes: CapeInfo[];
    /*not mapped: */ capes(): CapeInfo[];
    // private id: string;
    /*not mapped: */ id(): string;
    // private name: string;
    /*not mapped: */ name(): string;
    // private skins: SkinInfo[];
    /*not mapped: */ skins(): SkinInfo[];
    component1(): string;
    component2(): string;
    component3(): SkinInfo[];
    component4(): CapeInfo[];
    copy(id: string, name: string, skins: SkinInfo[], capes: CapeInfo[]): PlayerProfile;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}