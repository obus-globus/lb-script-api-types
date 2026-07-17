import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class GameRuleType extends Enum<GameRuleType> implements StringRepresentable {
    static BOOL: GameRuleType;
    static INT: GameRuleType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GameRuleType;
    static values(): GameRuleType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "INT" | "BOOL";
}