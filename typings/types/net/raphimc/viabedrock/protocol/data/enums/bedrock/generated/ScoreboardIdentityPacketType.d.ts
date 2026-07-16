import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ScoreboardIdentityPacketType extends Enum<ScoreboardIdentityPacketType> {
    static Remove: ScoreboardIdentityPacketType;
    static Update: ScoreboardIdentityPacketType;
    static getByName(paramarg0: string): ScoreboardIdentityPacketType;
    static getByName(paramarg0: string, paramarg1: ScoreboardIdentityPacketType): ScoreboardIdentityPacketType;
    static getByValue(paramarg0: number): ScoreboardIdentityPacketType;
    static getByValue(paramarg0: number, paramarg1: ScoreboardIdentityPacketType): ScoreboardIdentityPacketType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ScoreboardIdentityPacketType;
    static values(): ScoreboardIdentityPacketType[];
    private constructor(arg2: number)
    private constructor(arg2: ScoreboardIdentityPacketType)
    readonly value: number;
    getValue(): number;
    name(): "Update" | "Remove";
}