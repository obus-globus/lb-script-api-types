import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ScorePacketType extends Enum<ScorePacketType> {
    static Change: ScorePacketType;
    static Remove: ScorePacketType;
    static getByName(paramarg0: string): ScorePacketType;
    static getByName(paramarg0: string, paramarg1: ScorePacketType): ScorePacketType;
    static getByValue(paramarg0: number): ScorePacketType;
    static getByValue(paramarg0: number, paramarg1: ScorePacketType): ScorePacketType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScorePacketType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ScorePacketType)
    readonly value: number;
    getValue(): number;
    name(): "Change" | "Remove";
}