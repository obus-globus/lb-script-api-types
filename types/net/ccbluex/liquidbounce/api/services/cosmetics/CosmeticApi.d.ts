import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { Cosmetic } from '../../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/Cosmetic.d.ts'
export class CosmeticApi extends BaseApi {
    static INSTANCE: CosmeticApi;
    getCarrierCosmetics(uuid: UUID): Cosmetic[];
    getCarriers(): string[];
}