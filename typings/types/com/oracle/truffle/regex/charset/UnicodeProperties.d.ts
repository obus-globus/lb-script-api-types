import type { ClassSetContents } from '../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { UnicodeProperties$NameMatchingMode } from '../../../../../com/oracle/truffle/regex/charset/UnicodeProperties$NameMatchingMode.d.ts'
import type { UnicodePropertyData } from '../../../../../com/oracle/truffle/regex/charset/UnicodePropertyData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnicodeProperties extends Object {
    static BLOCKS: number;
    static OTHER_PROPERTIES: number;
    constructor(data: UnicodePropertyData, flags: number, nameMatchingMode: UnicodeProperties$NameMatchingMode)
    // private data: UnicodePropertyData;
    // private flags: number;
    // private nameMatchingMode: UnicodeProperties$NameMatchingMode;
    // private evaluatePropertySpec(propertySpec: string): (Object | null)[];
    // private evaluatePropertySpecStrings(propertySpec: string): ClassSetContents;
    getProperty(propertySpec: string): (Object | null)[];
    getPropertyOfStrings(propertySpec: string): ClassSetContents;
    // private isFlagSet(flag: number): boolean;
    isSupportedBlock(blockName: string): boolean;
    isSupportedGeneralCategory(generalCategoryName: string): boolean;
    isSupportedProperty(propertyName: string): boolean;
    isSupportedScript(scriptName: string): boolean;
    // private normalizeBlockName(blockName: string): string;
    // private normalizeGeneralCategoryName(generalCategoryName: string): string;
    // private normalizePropertyName(propertyName: string): string;
    // private normalizePropertySpec(propertySpec: string): string;
    // private normalizeScriptName(scriptName: string): string;
    unionOfProperties(initial: (Object | null)[], ...properties: string[]): (Object | null)[];
    unionOfProperties(...properties: string[]): (Object | null)[];
    // private withBlocks(): boolean;
    // private withOtherProperties(): boolean;
}