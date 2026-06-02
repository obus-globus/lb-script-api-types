import type { Record } from '../../java/lang/Record.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { WorldVersion } from '../../net/minecraft/WorldVersion.d.ts'
import type { PackType } from '../../net/minecraft/server/packs/PackType.d.ts'
import type { PackFormat } from '../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
import type { DataVersion } from '../../net/minecraft/world/level/storage/DataVersion.d.ts'
export class WorldVersion$Simple extends Record implements WorldVersion {
    // private buildTime: Date;
    // private dataVersion: DataVersion;
    // private datapackVersion: PackFormat;
    // private id: string;
    // private name: string;
    // private protocolVersion: number;
    // private resourcePackVersion: PackFormat;
    // private stable: boolean;
    buildTime(): Date;
    dataVersion(): DataVersion;
    datapackVersion(): PackFormat;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    name(): string;
    packVersion(packType: PackType): PackFormat;
    protocolVersion(): number;
    resourcePackVersion(): PackFormat;
    stable(): boolean;
    toString(): string;
}