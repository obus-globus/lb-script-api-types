import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CreativeItemCategory extends Enum<CreativeItemCategory> {
    static Construction: CreativeItemCategory;
    static Equipment: CreativeItemCategory;
    static ItemCommandOnly: CreativeItemCategory;
    static Items: CreativeItemCategory;
    static Nature: CreativeItemCategory;
    static Undefined: CreativeItemCategory;
    static getByName(paramarg0: string): CreativeItemCategory;
    static getByName(paramarg0: string, paramarg1: CreativeItemCategory): CreativeItemCategory;
    static getByValue(paramarg0: number): CreativeItemCategory;
    static getByValue(paramarg0: number, paramarg1: CreativeItemCategory): CreativeItemCategory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CreativeItemCategory;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: CreativeItemCategory)
    readonly value: number;
    getValue(): number;
    name(): "Construction" | "Nature" | "Equipment" | "Items" | "ItemCommandOnly" | "Undefined";
}