import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class EntityTargetClassification extends Enum<EntityTargetClassification> {
    static IGNORED: EntityTargetClassification;
    static INTERESTING: EntityTargetClassification;
    static TARGET: EntityTargetClassification;
    static getEntries(): EntityTargetClassification[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EntityTargetClassification;
    static values(): (Object | null)[];
    private constructor()
    name(): "TARGET" | "INTERESTING" | "IGNORED";
}