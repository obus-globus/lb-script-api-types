import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ByteBufFormat extends Enum<ByteBufFormat> {
    static HEX_DUMP: ByteBufFormat;
    static SIMPLE: ByteBufFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ByteBufFormat;
    static values(): ByteBufFormat[];
    private constructor()
    name(): "SIMPLE" | "HEX_DUMP";
}