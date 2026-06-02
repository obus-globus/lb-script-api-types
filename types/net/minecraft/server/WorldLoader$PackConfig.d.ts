import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PackRepository } from '../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { CloseableResourceManager } from '../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
import type { WorldDataConfiguration } from '../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
export class WorldLoader$PackConfig extends Record {
    // private initMode: boolean;
    // private initialDataConfig: WorldDataConfiguration;
    // private packRepository: PackRepository;
    // private safeMode: boolean;
    createResourceManager(): Pair<WorldDataConfiguration, CloseableResourceManager>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    initMode(): boolean;
    initialDataConfig(): WorldDataConfiguration;
    packRepository(): PackRepository;
    safeMode(): boolean;
    toString(): string;
}