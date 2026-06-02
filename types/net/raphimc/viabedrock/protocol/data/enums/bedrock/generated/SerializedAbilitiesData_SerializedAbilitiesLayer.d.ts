import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SerializedAbilitiesData_SerializedAbilitiesLayer extends Enum<SerializedAbilitiesData_SerializedAbilitiesLayer> {
    static Base: SerializedAbilitiesData_SerializedAbilitiesLayer;
    static Commands: SerializedAbilitiesData_SerializedAbilitiesLayer;
    static CustomCache: SerializedAbilitiesData_SerializedAbilitiesLayer;
    static Editor: SerializedAbilitiesData_SerializedAbilitiesLayer;
    static LoadingScreen: SerializedAbilitiesData_SerializedAbilitiesLayer;
    static Spectator: SerializedAbilitiesData_SerializedAbilitiesLayer;
    static getByName(paramarg0: string): SerializedAbilitiesData_SerializedAbilitiesLayer;
    static getByName(paramarg0: string, paramarg1: SerializedAbilitiesData_SerializedAbilitiesLayer): SerializedAbilitiesData_SerializedAbilitiesLayer;
    static getByValue(paramarg0: number): SerializedAbilitiesData_SerializedAbilitiesLayer;
    static getByValue(paramarg0: number, paramarg1: SerializedAbilitiesData_SerializedAbilitiesLayer): SerializedAbilitiesData_SerializedAbilitiesLayer;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SerializedAbilitiesData_SerializedAbilitiesLayer;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: SerializedAbilitiesData_SerializedAbilitiesLayer)
    readonly value: number;
    getValue(): number;
    name(): "CustomCache" | "Base" | "Spectator" | "Commands" | "Editor" | "LoadingScreen";
}