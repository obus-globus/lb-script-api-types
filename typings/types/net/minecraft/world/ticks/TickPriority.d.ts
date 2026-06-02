import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TickPriority extends Enum<TickPriority> {
    static CODEC: Codec<TickPriority>;
    static EXTREMELY_HIGH: TickPriority;
    static EXTREMELY_LOW: TickPriority;
    static HIGH: TickPriority;
    static LOW: TickPriority;
    static NORMAL: TickPriority;
    static VERY_HIGH: TickPriority;
    static VERY_LOW: TickPriority;
    static byValue(paramvalue: number): TickPriority;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TickPriority;
    static values(): (Object | null)[];
    private constructor(value: number)
    readonly value: number;
    getValue(): number;
    name(): "EXTREMELY_HIGH" | "VERY_HIGH" | "HIGH" | "NORMAL" | "LOW" | "VERY_LOW" | "EXTREMELY_LOW";
}