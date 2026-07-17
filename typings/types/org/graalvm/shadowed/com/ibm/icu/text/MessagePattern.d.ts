import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { MessagePattern$ApostropheMode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern$ApostropheMode.d.ts'
import type { MessagePattern$ArgType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern$ArgType.d.ts'
import type { MessagePattern$Part } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern$Part.d.ts'
import type { MessagePattern$Part$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern$Part$Type.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
export class MessagePattern extends Object implements Cloneable, Freezable<MessagePattern> {
    static ARG_NAME_NOT_NUMBER: number;
    static ARG_NAME_NOT_VALID: number;
    static NO_NUMERIC_VALUE: number;
    static validateArgumentName(paramname: string): number;
    constructor()
    constructor(pattern: string)
    constructor(mode: MessagePattern$ApostropheMode)
    // private aposMode: MessagePattern$ApostropheMode;
    readonly frozen: boolean;
    // private hasArgNames: boolean;
    // private hasArgNumbers: boolean;
    // private msg: string;
    // private needsAutoQuoting: boolean;
    // private numericValues: number[];
    // private parts: MessagePattern$Part[];
    // private addArgDoublePart(numericValue: number, start: number, length: number): void;
    // private addLimitPart(start: number, type: MessagePattern$Part$Type, index: number, length: number, value: number): void;
    // private addPart(type: MessagePattern$Part$Type, index: number, length: number, value: number): void;
    autoQuoteApostropheDeep(): string;
    clear(): void;
    clearPatternAndSetApostropheMode(mode: MessagePattern$ApostropheMode): void;
    clone(): MessagePattern;
    cloneAsThawed(): MessagePattern;
    countParts(): number;
    equals(other: Object | null): boolean;
    freeze(): MessagePattern;
    getApostropheMode(): MessagePattern$ApostropheMode;
    getLimitPartIndex(start: number): number;
    getNumericValue(part: MessagePattern$Part): number;
    getPart(i: number): MessagePattern$Part;
    getPartType(i: number): MessagePattern$Part$Type;
    getPatternIndex(partIndex: number): number;
    getPatternString(): string;
    getPluralOffset(pluralStart: number): number;
    getSubstring(part: MessagePattern$Part): string;
    hasNamedArguments(): boolean;
    hasNumberedArguments(): boolean;
    hashCode(): number;
    // private inMessageFormatPattern(nestingLevel: number): boolean;
    // private inTopLevelChoiceMessage(nestingLevel: number, parentType: MessagePattern$ArgType): boolean;
    // private isChoice(index: number): boolean;
    isFrozen(): boolean;
    // private isOrdinal(index: number): boolean;
    // private isPlural(index: number): boolean;
    // private isSelect(index: number): boolean;
    jdkAposMode(): boolean;
    parse(pattern: string): MessagePattern;
    // private parseArg(index: number, argStartLength: number, nestingLevel: number): number;
    // private parseArgNumber(start: number, limit: number): number;
    // private parseChoiceStyle(index: number, nestingLevel: number): number;
    parseChoiceStyle(pattern: string): MessagePattern;
    // private parseDouble(start: number, limit: number, allowInfinity: boolean): void;
    // private parseMessage(index: number, msgStartLength: number, nestingLevel: number, parentType: MessagePattern$ArgType): number;
    // private parsePluralOrSelectStyle(argType: MessagePattern$ArgType, index: number, nestingLevel: number): number;
    parsePluralStyle(pattern: string): MessagePattern;
    parseSelectStyle(pattern: string): MessagePattern;
    // private parseSimpleStyle(index: number): number;
    partSubstringMatches(part: MessagePattern$Part, s: string): boolean;
    // private postParse(): void;
    // private preParse(pattern: string): void;
    // private prefix(): string;
    // private prefix(start: number): string;
    // private skipDouble(index: number): number;
    // private skipIdentifier(index: number): number;
    // private skipWhiteSpace(index: number): number;
    toString(): string;
}