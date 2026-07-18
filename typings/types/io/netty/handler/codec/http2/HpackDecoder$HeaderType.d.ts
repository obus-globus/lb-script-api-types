import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HpackDecoder$HeaderType extends Enum<HpackDecoder$HeaderType> {
    static REGULAR_HEADER: HpackDecoder$HeaderType;
    static REQUEST_PSEUDO_HEADER: HpackDecoder$HeaderType;
    static RESPONSE_PSEUDO_HEADER: HpackDecoder$HeaderType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HpackDecoder$HeaderType;
    static values(): HpackDecoder$HeaderType[];
    private constructor()
    name(): "REGULAR_HEADER" | "REQUEST_PSEUDO_HEADER" | "RESPONSE_PSEUDO_HEADER";
}