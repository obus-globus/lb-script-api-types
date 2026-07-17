import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbilitiesIndex } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/AbilitiesIndex.d.ts'
import type { SerializedAbilitiesData_SerializedAbilitiesLayer } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/SerializedAbilitiesData_SerializedAbilitiesLayer.d.ts'
import type { PlayerAbilities$AbilitiesLayer } from '../../../../../net/raphimc/viabedrock/protocol/model/PlayerAbilities$AbilitiesLayer.d.ts'
export class PlayerAbilities extends Record {
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(entityUniqueId: number, playerPermission: number, commandPermission: number, abilityLayers: JavaMap<SerializedAbilitiesData_SerializedAbilitiesLayer, PlayerAbilities$AbilitiesLayer>)
    // private abilityLayers: JavaMap<SerializedAbilitiesData_SerializedAbilitiesLayer, PlayerAbilities$AbilitiesLayer>;
    // private commandPermission: number;
    // private entityUniqueId: number;
    // private playerPermission: number;
    abilityLayers(): JavaMap<SerializedAbilitiesData_SerializedAbilitiesLayer, PlayerAbilities$AbilitiesLayer>;
    commandPermission(): number;
    entityUniqueId(): number;
    equals(arg0: Object | null): boolean;
    getBooleanValue(arg0: AbilitiesIndex): boolean;
    getFloatValue(arg0: AbilitiesIndex): number;
    getOrCreateCacheLayer(): PlayerAbilities$AbilitiesLayer;
    hashCode(): number;
    playerPermission(): number;
    toString(): string;
}