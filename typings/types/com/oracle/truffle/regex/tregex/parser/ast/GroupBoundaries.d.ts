import type { RegexLanguage } from '../../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { PreCalculatedResultFactory } from '../../../../../../../com/oracle/truffle/regex/result/PreCalculatedResultFactory.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { JsonArray } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonArray.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class GroupBoundaries extends Object implements JsonConvertible {
    static createCachedGroupBoundaries(): GroupBoundaries[];
    static getEmptyInstance(paramlanguage: RegexLanguage): GroupBoundaries;
    static getStaticInstance(paramlanguage: RegexLanguage, paramupdateIndices: number[], paramclearIndices: number[]): GroupBoundaries;
    constructor(updateIndices: number[], clearIndices: number[], firstGroup: number, lastGroup: number)
    // private cachedHash: number;
    // private clearArray: number[];
    // private clearArrayByte: number[];
    readonly clearIndices: number[];
    readonly firstGroup: number;
    readonly lastGroup: number;
    // private updateArray: number[];
    // private updateArrayByte: number[];
    readonly updateIndices: number[];
    apply(array: number[], cgOffset: number, lgOffset: number, index: number, trackLastGroup: boolean): void;
    applyExploded(array: number[], cgOffset: number, lgOffset: number, index: number, trackLastGroup: boolean, dontOverwriteLastGroup: boolean): void;
    applyToResultFactory(resultFactory: PreCalculatedResultFactory, index: number, trackLastGroup: boolean): void;
    clearsToByteArray(): number[];
    equals(obj: Object | null): boolean;
    getClearIndices(): number[];
    getFirstGroup(): number;
    getLastGroup(): number;
    getUpdateIndices(): number[];
    hasIndexClears(): boolean;
    hasIndexUpdates(): boolean;
    hasLastGroup(): boolean;
    hashCode(): number;
    indexUpdateSourceSectionsToJson(ast: RegexAST): JsonArray;
    isEmpty(): boolean;
    materializeArrays(): void;
    toJson(): JsonValue;
    toString(): string;
    updateBitSets(foreignUpdateIndices: number[], foreignClearIndices: number[]): void;
    updatesToByteArray(): number[];
}