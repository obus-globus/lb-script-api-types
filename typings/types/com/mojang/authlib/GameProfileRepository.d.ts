import type { ProfileLookupCallback } from '../../../com/mojang/authlib/ProfileLookupCallback.d.ts'
import type { NameAndId } from '../../../com/mojang/authlib/yggdrasil/response/NameAndId.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface GameProfileRepository extends Object{
    findProfileByName(arg0: string): Optional<NameAndId>;
    findProfilesByNames(arg0: string[], arg1: ProfileLookupCallback): void;
}