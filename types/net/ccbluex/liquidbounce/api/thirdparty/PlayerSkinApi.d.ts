import type { File } from '../../../../../java/io/File.d.ts'
import type { BaseApi } from '../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { PlayerModelType } from '../../../../../net/minecraft/world/entity/player/PlayerModelType.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
export class PlayerSkinApi extends BaseApi {
    constructor(serviceHost: string)
    changeSkin(url: string, model: PlayerModelType): void;
    uploadSkin(file: File, model: PlayerModelType): void;
    // private uploadSkin(body: RequestBody): void;
}