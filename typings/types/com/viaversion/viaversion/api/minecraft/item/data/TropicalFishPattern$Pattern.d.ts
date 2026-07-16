import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TropicalFishPattern$Pattern extends Enum<TropicalFishPattern$Pattern> {
    static BETTY: TropicalFishPattern$Pattern;
    static BLOCKFISH: TropicalFishPattern$Pattern;
    static BRINELY: TropicalFishPattern$Pattern;
    static CLAYFISH: TropicalFishPattern$Pattern;
    static DASHER: TropicalFishPattern$Pattern;
    static FLOPPER: TropicalFishPattern$Pattern;
    static GLITTER: TropicalFishPattern$Pattern;
    static KOB: TropicalFishPattern$Pattern;
    static SNOOPER: TropicalFishPattern$Pattern;
    static SPOTTY: TropicalFishPattern$Pattern;
    static STRIPEY: TropicalFishPattern$Pattern;
    static SUNSTREAK: TropicalFishPattern$Pattern;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TropicalFishPattern$Pattern;
    static values(): TropicalFishPattern$Pattern[];
    private constructor(arg2: string, arg3: number, arg4: number)
    // private key: string;
    // private packedId: number;
    name(): "KOB" | "SUNSTREAK" | "SNOOPER" | "DASHER" | "BRINELY" | "SPOTTY" | "FLOPPER" | "STRIPEY" | "GLITTER" | "BLOCKFISH" | "BETTY" | "CLAYFISH";
}