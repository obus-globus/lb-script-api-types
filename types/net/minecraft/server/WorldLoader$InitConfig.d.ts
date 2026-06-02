import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Commands$CommandSelection } from '../../../net/minecraft/commands/Commands$CommandSelection.d.ts'
import type { WorldLoader$PackConfig } from '../../../net/minecraft/server/WorldLoader$PackConfig.d.ts'
import type { PermissionSet } from '../../../net/minecraft/server/permissions/PermissionSet.d.ts'
export class WorldLoader$InitConfig extends Record {
    constructor(packConfig: WorldLoader$PackConfig, commandSelection: Commands$CommandSelection, functionCompilationPermissions: PermissionSet)
    // private commandSelection: Commands$CommandSelection;
    // private functionCompilationPermissions: PermissionSet;
    // private packConfig: WorldLoader$PackConfig;
    commandSelection(): Commands$CommandSelection;
    equals(o: Object | null): boolean;
    functionCompilationPermissions(): PermissionSet;
    hashCode(): number;
    packConfig(): WorldLoader$PackConfig;
    toString(): string;
}