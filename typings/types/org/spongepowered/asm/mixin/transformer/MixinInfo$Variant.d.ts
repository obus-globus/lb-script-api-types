import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MixinInfo$Variant extends Enum<MixinInfo$Variant> {
    static ACCESSOR: MixinInfo$Variant;
    static ENUM_EXTENSION: MixinInfo$Variant;
    static INTERFACE: MixinInfo$Variant;
    static PROXY: MixinInfo$Variant;
    static STANDARD: MixinInfo$Variant;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinInfo$Variant;
    static values(): MixinInfo$Variant[];
    private constructor()
    name(): "STANDARD" | "INTERFACE" | "ACCESSOR" | "PROXY" | "ENUM_EXTENSION";
}