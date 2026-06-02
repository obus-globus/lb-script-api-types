import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemStackRequestActionType extends Enum<ItemStackRequestActionType> {
    static Consume: ItemStackRequestActionType;
    static CraftCreative: ItemStackRequestActionType;
    static CraftLoom: ItemStackRequestActionType;
    static CraftNonImplemented_DEPRECATEDASKTYLAING: ItemStackRequestActionType;
    static CraftRecipe: ItemStackRequestActionType;
    static CraftRecipeAuto: ItemStackRequestActionType;
    static CraftRecipeOptional: ItemStackRequestActionType;
    static CraftRepairAndDisenchant: ItemStackRequestActionType;
    static CraftResults_DEPRECATEDASKTYLAING: ItemStackRequestActionType;
    static Create: ItemStackRequestActionType;
    static Destroy: ItemStackRequestActionType;
    static Drop: ItemStackRequestActionType;
    static Place: ItemStackRequestActionType;
    static PlaceInItemContainer_DEPRECATED: ItemStackRequestActionType;
    static ScreenBeaconPayment: ItemStackRequestActionType;
    static ScreenHUDMineBlock: ItemStackRequestActionType;
    static ScreenLabTableCombine: ItemStackRequestActionType;
    static Swap: ItemStackRequestActionType;
    static TEST_INFRASTRUCTURE_ENABLED: ItemStackRequestActionType;
    static Take: ItemStackRequestActionType;
    static TakeFromItemContainer_DEPRECATED: ItemStackRequestActionType;
    static Test: ItemStackRequestActionType;
    static endif: ItemStackRequestActionType;
    static ifdef: ItemStackRequestActionType;
    static getByName(paramarg0: string): ItemStackRequestActionType;
    static getByName(paramarg0: string, paramarg1: ItemStackRequestActionType): ItemStackRequestActionType;
    static getByValue(paramarg0: number): ItemStackRequestActionType;
    static getByValue(paramarg0: number, paramarg1: ItemStackRequestActionType): ItemStackRequestActionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemStackRequestActionType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ItemStackRequestActionType)
    readonly value: number;
    getValue(): number;
    name(): "Take" | "Place" | "Swap" | "Drop" | "Destroy" | "Consume" | "Create" | "PlaceInItemContainer_DEPRECATED" | "TakeFromItemContainer_DEPRECATED" | "ScreenLabTableCombine" | "ScreenBeaconPayment" | "ScreenHUDMineBlock" | "CraftRecipe" | "CraftRecipeAuto" | "CraftCreative" | "CraftRecipeOptional" | "CraftRepairAndDisenchant" | "CraftLoom" | "CraftNonImplemented_DEPRECATEDASKTYLAING" | "CraftResults_DEPRECATEDASKTYLAING" | "ifdef" | "TEST_INFRASTRUCTURE_ENABLED" | "Test" | "endif";
}