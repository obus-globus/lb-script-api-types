import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Random } from '../../../../../../../java/util/Random.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Location } from '../../../../../../../net/raphimc/vialegacy/api/model/Location.d.ts'
import type { Sound } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/data/sound/Sound.d.ts'
import type { SoundType } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/data/sound/SoundType.d.ts'
import type { AbstractTrackedEntity } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/model/AbstractTrackedEntity.d.ts'
import type { ConfiguredSound } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/model/ConfiguredSound.d.ts'
export class EntityTracker extends StoredObject {
    static constrainToRange(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor(arg0: UserConnection)
    RND: Random;
    // private entityMap: { [key: number]: AbstractTrackedEntity };
    readonly playerID: number;
    getNearestEntity(arg0: Location, arg1: number, arg2: (param0: AbstractTrackedEntity) => kotlin.Boolean): Optional<AbstractTrackedEntity>;
    getPlayerID(): number;
    getTrackedEntities(): { [key: number]: AbstractTrackedEntity };
    playSound(arg0: number, arg1: SoundType): void;
    // private playSoundAt(arg0: Location, arg1: Location, arg2: ConfiguredSound): void;
    playSoundAt(arg0: Location, arg1: Sound, arg2: number, arg3: number): void;
    setPlayerID(arg0: number): void;
    tick(): void;
    updateEntityDataList(arg0: number, arg1: EntityData[]): void;
    updateEntityLocation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
}