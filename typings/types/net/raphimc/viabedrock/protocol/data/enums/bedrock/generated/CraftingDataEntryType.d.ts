import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CraftingDataEntryType extends Enum<CraftingDataEntryType> {
    static MultiRecipe: CraftingDataEntryType;
    static ShapedChemistryRecipe: CraftingDataEntryType;
    static ShapedRecipe: CraftingDataEntryType;
    static ShapelessChemistryRecipe: CraftingDataEntryType;
    static ShapelessRecipe: CraftingDataEntryType;
    static SmithingTransformRecipe: CraftingDataEntryType;
    static SmithingTrimRecipe: CraftingDataEntryType;
    static UserDataShapelessRecipe: CraftingDataEntryType;
    static getByName(paramarg0: string): CraftingDataEntryType;
    static getByName(paramarg0: string, paramarg1: CraftingDataEntryType): CraftingDataEntryType;
    static getByValue(paramarg0: number): CraftingDataEntryType;
    static getByValue(paramarg0: number, paramarg1: CraftingDataEntryType): CraftingDataEntryType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CraftingDataEntryType;
    static values(): CraftingDataEntryType[];
    private constructor(arg2: number)
    private constructor(arg2: CraftingDataEntryType)
    readonly value: number;
    getValue(): number;
    name(): "ShapelessRecipe" | "ShapedRecipe" | "MultiRecipe" | "UserDataShapelessRecipe" | "ShapelessChemistryRecipe" | "ShapedChemistryRecipe" | "SmithingTransformRecipe" | "SmithingTrimRecipe";
}