import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BlockLZ4CompressorInputStream$State extends Enum<BlockLZ4CompressorInputStream$State> {
    static EOF: BlockLZ4CompressorInputStream$State;
    static IN_BACK_REFERENCE: BlockLZ4CompressorInputStream$State;
    static IN_LITERAL: BlockLZ4CompressorInputStream$State;
    static LOOKING_FOR_BACK_REFERENCE: BlockLZ4CompressorInputStream$State;
    static NO_BLOCK: BlockLZ4CompressorInputStream$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BlockLZ4CompressorInputStream$State;
    static values(): BlockLZ4CompressorInputStream$State[];
    private constructor()
    name(): "NO_BLOCK" | "IN_LITERAL" | "LOOKING_FOR_BACK_REFERENCE" | "IN_BACK_REFERENCE" | "EOF";
}