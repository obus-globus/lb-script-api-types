import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Difficulty } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/Difficulty.d.ts'
export class JoinGameStorage extends Record implements StorableObject {
    // private chunkTickRange: number;
    // private currentTime: number;
    // private difficulty: Difficulty;
    // private levelName: string;
    // private lightningLevel: number;
    // private rainLevel: number;
    chunkTickRange(): number;
    currentTime(): number;
    difficulty(): Difficulty;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    levelName(): string;
    lightningLevel(): number;
    onRemove(): void;
    rainLevel(): number;
    toString(): string;
}