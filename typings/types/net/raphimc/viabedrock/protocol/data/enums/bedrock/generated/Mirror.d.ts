import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Mirror extends Enum<Mirror> {
    static None: Mirror;
    static X: Mirror;
    static XZ: Mirror;
    static Z: Mirror;
    static getByName(paramarg0: string): Mirror;
    static getByName(paramarg0: string, paramarg1: Mirror): Mirror;
    static getByValue(paramarg0: number): Mirror;
    static getByValue(paramarg0: number, paramarg1: Mirror): Mirror;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Mirror;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: Mirror)
    readonly value: number;
    getValue(): number;
    name(): "None" | "X" | "Z" | "XZ";
}