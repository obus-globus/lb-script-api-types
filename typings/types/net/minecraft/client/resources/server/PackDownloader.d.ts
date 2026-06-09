import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DownloadQueue$BatchResult } from '../../../../../net/minecraft/server/packs/DownloadQueue$BatchResult.d.ts'
import type { DownloadQueue$DownloadRequest } from '../../../../../net/minecraft/server/packs/DownloadQueue$DownloadRequest.d.ts'
export interface PackDownloader extends Object {
    download(requests: Map<UUID, DownloadQueue$DownloadRequest>, output: (param0: DownloadQueue$BatchResult) => void): void;
}