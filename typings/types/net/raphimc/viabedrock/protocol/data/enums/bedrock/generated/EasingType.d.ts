import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EasingType extends Enum<EasingType> {
    static In_back: EasingType;
    static In_bounce: EasingType;
    static In_circ: EasingType;
    static In_cubic: EasingType;
    static In_elastic: EasingType;
    static In_expo: EasingType;
    static In_out_back: EasingType;
    static In_out_bounce: EasingType;
    static In_out_circ: EasingType;
    static In_out_cubic: EasingType;
    static In_out_elastic: EasingType;
    static In_out_expo: EasingType;
    static In_out_quad: EasingType;
    static In_out_quart: EasingType;
    static In_out_quint: EasingType;
    static In_out_sine: EasingType;
    static In_quad: EasingType;
    static In_quart: EasingType;
    static In_quint: EasingType;
    static In_sine: EasingType;
    static Linear: EasingType;
    static Out_back: EasingType;
    static Out_bounce: EasingType;
    static Out_circ: EasingType;
    static Out_cubic: EasingType;
    static Out_elastic: EasingType;
    static Out_expo: EasingType;
    static Out_quad: EasingType;
    static Out_quart: EasingType;
    static Out_quint: EasingType;
    static Out_sine: EasingType;
    static Spring: EasingType;
    static getByName(paramarg0: string): EasingType;
    static getByName(paramarg0: string, paramarg1: EasingType): EasingType;
    static getByValue(paramarg0: number): EasingType;
    static getByValue(paramarg0: number, paramarg1: EasingType): EasingType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EasingType;
    static values(): EasingType[];
    private constructor(arg2: number)
    private constructor(arg2: EasingType)
    readonly value: number;
    getValue(): number;
    name(): "Linear" | "Spring" | "In_quad" | "Out_quad" | "In_out_quad" | "In_cubic" | "Out_cubic" | "In_out_cubic" | "In_quart" | "Out_quart" | "In_out_quart" | "In_quint" | "Out_quint" | "In_out_quint" | "In_sine" | "Out_sine" | "In_out_sine" | "In_expo" | "Out_expo" | "In_out_expo" | "In_circ" | "Out_circ" | "In_out_circ" | "In_bounce" | "Out_bounce" | "In_out_bounce" | "In_back" | "Out_back" | "In_out_back" | "In_elastic" | "Out_elastic" | "In_out_elastic";
}