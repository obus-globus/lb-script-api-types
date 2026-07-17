import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KnownPack } from '../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { PackRepository } from '../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { CloseableResourceManager } from '../../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
export class KnownPacksManager extends Object {
    constructor()
    // private knownPackToId: JavaMap<KnownPack, string>;
    // private repository: PackRepository;
    createResourceManager(): CloseableResourceManager;
    trySelectingPacks(packsToSelect: KnownPack[]): KnownPack[];
}