import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class EntityTargetClassification extends Enum<EntityTargetClassification> {
    static IGNORED: EntityTargetClassification;
    static INTERESTING: EntityTargetClassification;
    static TARGET: EntityTargetClassification;
    static getEntries(): EntityTargetClassification[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): EntityTargetClassification;
    static values(): EntityTargetClassification[];
    private constructor()
    name(): "TARGET" | "INTERESTING" | "IGNORED";
}