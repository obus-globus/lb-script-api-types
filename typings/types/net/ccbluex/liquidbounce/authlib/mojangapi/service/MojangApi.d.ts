import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProfileIdName } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/ProfileIdName.d.ts'
export interface MojangApi extends Object{
    fetchProfiles(names: string[]): ProfileIdName[];
    fetchUuidByUsername(username: string): ProfileIdName;
    lookupProfilesBulk(names: string[]): ProfileIdName[];
    lookupUuidByName(username: string): ProfileIdName;
}