import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class IdentityDefinition_Type extends Enum<IdentityDefinition_Type> {
    static Entity: IdentityDefinition_Type;
    static FakePlayer: IdentityDefinition_Type;
    static Invalid: IdentityDefinition_Type;
    static Player: IdentityDefinition_Type;
    static getByName(paramarg0: string): IdentityDefinition_Type;
    static getByName(paramarg0: string, paramarg1: IdentityDefinition_Type): IdentityDefinition_Type;
    static getByValue(paramarg0: number): IdentityDefinition_Type;
    static getByValue(paramarg0: number, paramarg1: IdentityDefinition_Type): IdentityDefinition_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IdentityDefinition_Type;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: IdentityDefinition_Type)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "Player" | "Entity" | "FakePlayer";
}