import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SimulationType extends Enum<SimulationType> {
    static Editor: SimulationType;
    static Game: SimulationType;
    static INVALID: SimulationType;
    static Test: SimulationType;
    static getByName(paramarg0: string): SimulationType;
    static getByName(paramarg0: string, paramarg1: SimulationType): SimulationType;
    static getByValue(paramarg0: number): SimulationType;
    static getByValue(paramarg0: number, paramarg1: SimulationType): SimulationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SimulationType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: SimulationType)
    readonly value: number;
    getValue(): number;
    name(): "Game" | "Editor" | "Test" | "INVALID";
}