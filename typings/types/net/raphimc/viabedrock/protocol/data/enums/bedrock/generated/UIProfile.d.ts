import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class UIProfile extends Enum<UIProfile> {
    static Classic: UIProfile;
    static None: UIProfile;
    static Pocket: UIProfile;
    static getByName(paramarg0: string): UIProfile;
    static getByName(paramarg0: string, paramarg1: UIProfile): UIProfile;
    static getByValue(paramarg0: number): UIProfile;
    static getByValue(paramarg0: number, paramarg1: UIProfile): UIProfile;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UIProfile;
    static values(): UIProfile[];
    private constructor(arg2: number)
    private constructor(arg2: UIProfile)
    readonly value: number;
    getValue(): number;
    name(): "Classic" | "Pocket" | "None";
}