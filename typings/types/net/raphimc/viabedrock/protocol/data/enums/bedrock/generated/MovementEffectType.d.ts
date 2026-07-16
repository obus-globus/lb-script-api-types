import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MovementEffectType extends Enum<MovementEffectType> {
    static DOLPHIN_BOOST: MovementEffectType;
    static GEYSER_BOOST: MovementEffectType;
    static GLIDE_BOOST: MovementEffectType;
    static getByName(paramarg0: string): MovementEffectType;
    static getByName(paramarg0: string, paramarg1: MovementEffectType): MovementEffectType;
    static getByValue(paramarg0: number): MovementEffectType;
    static getByValue(paramarg0: number, paramarg1: MovementEffectType): MovementEffectType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MovementEffectType;
    static values(): MovementEffectType[];
    private constructor(arg2: number)
    private constructor(arg2: MovementEffectType)
    readonly value: number;
    getValue(): number;
    name(): "GLIDE_BOOST" | "DOLPHIN_BOOST" | "GEYSER_BOOST";
}