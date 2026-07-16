import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LayoutType extends Enum<LayoutType> {
    static BATCH: LayoutType;
    static CHANNEL: LayoutType;
    static DEPTH: LayoutType;
    static HEIGHT: LayoutType;
    static TIME: LayoutType;
    static UNKNOWN: LayoutType;
    static WIDTH: LayoutType;
    static fromValue(paramarg0: string): LayoutType;
    static fromValue(paramarg0: string): LayoutType[];
    static toString(paramarg0: LayoutType[]): string;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LayoutType;
    static values(): LayoutType[];
    private constructor(arg2: string)
    readonly value: string;
    getValue(): string;
    name(): "BATCH" | "CHANNEL" | "DEPTH" | "HEIGHT" | "WIDTH" | "TIME" | "UNKNOWN";
}