import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NbtConverter_v1_21_5$ListType extends Enum<NbtConverter_v1_21_5$ListType> {
    static BYTE: NbtConverter_v1_21_5$ListType;
    static INT: NbtConverter_v1_21_5$ListType;
    static LIST: NbtConverter_v1_21_5$ListType;
    static LONG: NbtConverter_v1_21_5$ListType;
    static MIXED_LIST: NbtConverter_v1_21_5$ListType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NbtConverter_v1_21_5$ListType;
    static values(): NbtConverter_v1_21_5$ListType[];
    private constructor()
    name(): "BYTE" | "INT" | "LONG" | "LIST" | "MIXED_LIST";
}