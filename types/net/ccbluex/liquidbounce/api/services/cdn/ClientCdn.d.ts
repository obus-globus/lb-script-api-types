import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
export class ClientCdn extends BaseApi {
    static INSTANCE: ClientCdn;
    requestStaffList(address: string): string[];
}