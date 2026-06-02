import type { Date } from '../../java/util/Date.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { PackType } from '../../net/minecraft/server/packs/PackType.d.ts'
import type { PackFormat } from '../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
import type { DataVersion } from '../../net/minecraft/world/level/storage/DataVersion.d.ts'
export interface WorldVersion extends Object{
    buildTime(): Date;
    dataVersion(): DataVersion;
    id(): string;
    name(): string;
    packVersion(packType: PackType): PackFormat;
    protocolVersion(): number;
    stable(): boolean;
}