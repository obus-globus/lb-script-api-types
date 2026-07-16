import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class CentralProcessor$ProcessorCache$Type extends Enum<CentralProcessor$ProcessorCache$Type> {
    static DATA: CentralProcessor$ProcessorCache$Type;
    static INSTRUCTION: CentralProcessor$ProcessorCache$Type;
    static TRACE: CentralProcessor$ProcessorCache$Type;
    static UNIFIED: CentralProcessor$ProcessorCache$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CentralProcessor$ProcessorCache$Type;
    static values(): CentralProcessor$ProcessorCache$Type[];
    private constructor()
    toString(): string;
    name(): "UNIFIED" | "INSTRUCTION" | "DATA" | "TRACE";
}