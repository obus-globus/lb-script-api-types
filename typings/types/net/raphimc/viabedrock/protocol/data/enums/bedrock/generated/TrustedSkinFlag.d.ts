import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TrustedSkinFlag extends Enum<TrustedSkinFlag> {
    static False: TrustedSkinFlag;
    static True: TrustedSkinFlag;
    static Unset: TrustedSkinFlag;
    static getByName(paramarg0: string): TrustedSkinFlag;
    static getByName(paramarg0: string, paramarg1: TrustedSkinFlag): TrustedSkinFlag;
    static getByValue(paramarg0: number): TrustedSkinFlag;
    static getByValue(paramarg0: number, paramarg1: TrustedSkinFlag): TrustedSkinFlag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrustedSkinFlag;
    static values(): TrustedSkinFlag[];
    private constructor(arg2: number)
    private constructor(arg2: TrustedSkinFlag)
    readonly value: number;
    getValue(): number;
    name(): "Unset" | "False" | "True";
}