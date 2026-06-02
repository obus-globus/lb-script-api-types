import type { BaseApi } from '../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { MojangApi$UsernameRecord } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/MojangApi$UsernameRecord.d.ts'
export class MojangApi extends BaseApi {
    static INSTANCE: MojangApi;
    getNames(uuidAsString: string): MojangApi$UsernameRecord[];
}