import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PackType extends Enum<PackType> {
    static Addon: PackType;
    static Behavior: PackType;
    static Cached: PackType;
    static CopyProtected: PackType;
    static Invalid: PackType;
    static PersonaPiece: PackType;
    static Resources: PackType;
    static Skins: PackType;
    static WorldTemplate: PackType;
    static getByName(paramarg0: string): PackType;
    static getByName(paramarg0: string, paramarg1: PackType): PackType;
    static getByValue(paramarg0: number): PackType;
    static getByValue(paramarg0: number, paramarg1: PackType): PackType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PackType;
    static values(): PackType[];
    private constructor(arg2: number)
    private constructor(arg2: PackType)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "Addon" | "Cached" | "CopyProtected" | "Behavior" | "PersonaPiece" | "Resources" | "Skins" | "WorldTemplate";
}