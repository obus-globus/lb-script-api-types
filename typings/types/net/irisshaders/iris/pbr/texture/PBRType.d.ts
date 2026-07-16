import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PBRType extends Enum<PBRType> {
    static NORMAL: PBRType;
    static SPECULAR: PBRType;
    static fromFileLocation(paramarg0: string): PBRType;
    static removeSuffix(paramarg0: string): string;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PBRType;
    static values(): PBRType[];
    private constructor(arg2: string, arg3: number)
    readonly defaultValue: number;
    readonly suffix: string;
    appendSuffix(arg0: string): string;
    getDefaultValue(): number;
    getSuffix(): string;
    name(): "NORMAL" | "SPECULAR";
}