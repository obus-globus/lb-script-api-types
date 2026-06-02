import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EasingType extends Enum<EasingType> {
    static in_back: EasingType;
    static in_bounce: EasingType;
    static in_circ: EasingType;
    static in_cubic: EasingType;
    static in_elastic: EasingType;
    static in_expo: EasingType;
    static in_out_back: EasingType;
    static in_out_bounce: EasingType;
    static in_out_circ: EasingType;
    static in_out_cubic: EasingType;
    static in_out_elastic: EasingType;
    static in_out_expo: EasingType;
    static in_out_quad: EasingType;
    static in_out_quart: EasingType;
    static in_out_quint: EasingType;
    static in_out_sine: EasingType;
    static in_quad: EasingType;
    static in_quart: EasingType;
    static in_quint: EasingType;
    static in_sine: EasingType;
    static linear: EasingType;
    static out_back: EasingType;
    static out_bounce: EasingType;
    static out_circ: EasingType;
    static out_cubic: EasingType;
    static out_elastic: EasingType;
    static out_expo: EasingType;
    static out_quad: EasingType;
    static out_quart: EasingType;
    static out_quint: EasingType;
    static out_sine: EasingType;
    static spring: EasingType;
    static getByName(paramarg0: string): EasingType;
    static getByName(paramarg0: string, paramarg1: EasingType): EasingType;
    static getByValue(paramarg0: number): EasingType;
    static getByValue(paramarg0: number, paramarg1: EasingType): EasingType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EasingType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: EasingType)
    readonly value: number;
    getValue(): number;
    name(): "linear" | "spring" | "in_quad" | "out_quad" | "in_out_quad" | "in_cubic" | "out_cubic" | "in_out_cubic" | "in_quart" | "out_quart" | "in_out_quart" | "in_quint" | "out_quint" | "in_out_quint" | "in_sine" | "out_sine" | "in_out_sine" | "in_expo" | "out_expo" | "in_out_expo" | "in_circ" | "out_circ" | "in_out_circ" | "in_bounce" | "out_bounce" | "in_out_bounce" | "in_back" | "out_back" | "in_out_back" | "in_elastic" | "out_elastic" | "in_out_elastic";
}