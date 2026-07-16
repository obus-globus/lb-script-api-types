import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockRenderType extends Enum<BlockRenderType> {
    static CUTOUT: BlockRenderType;
    static CUTOUT_MIPPED: BlockRenderType;
    static SOLID: BlockRenderType;
    static TRANSLUCENT: BlockRenderType;
    static fromString(paramarg0: string): Optional<BlockRenderType>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BlockRenderType;
    static values(): BlockRenderType[];
    private constructor()
    name(): "SOLID" | "CUTOUT" | "CUTOUT_MIPPED" | "TRANSLUCENT";
}