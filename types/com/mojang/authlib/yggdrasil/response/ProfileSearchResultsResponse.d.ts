import type { NameAndId } from '../../../../../com/mojang/authlib/yggdrasil/response/NameAndId.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProfileSearchResultsResponse extends Record {
    static LIST_TYPE: Type;
    constructor(profiles: NameAndId[])
    // private profiles: NameAndId[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    profiles(): NameAndId[];
    toString(): string;
}