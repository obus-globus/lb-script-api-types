import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LevelChunk$EntityCreationType extends Enum<LevelChunk$EntityCreationType> {
    static CHECK: LevelChunk$EntityCreationType;
    static IMMEDIATE: LevelChunk$EntityCreationType;
    static QUEUED: LevelChunk$EntityCreationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LevelChunk$EntityCreationType;
    static values(): LevelChunk$EntityCreationType[];
    private constructor()
    name(): "IMMEDIATE" | "QUEUED" | "CHECK";
}