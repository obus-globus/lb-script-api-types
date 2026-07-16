import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ServiceQuality extends Enum<ServiceQuality> {
    static GOOD: ServiceQuality;
    static GREAT: ServiceQuality;
    static OKAY: ServiceQuality;
    static POOR: ServiceQuality;
    static UNKNOWN: ServiceQuality;
    static byValue(paramvalue: number): ServiceQuality;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ServiceQuality;
    static values(): ServiceQuality[];
    private constructor(value: number, iconPath: string)
    readonly icon: Identifier;
    readonly value: number;
    getIcon(): Identifier;
    getValue(): number;
    name(): "GREAT" | "GOOD" | "OKAY" | "POOR" | "UNKNOWN";
}