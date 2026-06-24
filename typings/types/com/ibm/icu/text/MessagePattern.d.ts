import type { MessagePattern$ApostropheMode } from '../../../../com/ibm/icu/text/MessagePattern$ApostropheMode.d.ts'
import type { MessagePattern$ArgType } from '../../../../com/ibm/icu/text/MessagePattern$ArgType.d.ts'
import type { MessagePattern$Part } from '../../../../com/ibm/icu/text/MessagePattern$Part.d.ts'
import type { MessagePattern$Part$Type } from '../../../../com/ibm/icu/text/MessagePattern$Part$Type.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class MessagePattern extends Object implements Freezable<MessagePattern>, Cloneable {
    static ARG_NAME_NOT_NUMBER: number;
    static ARG_NAME_NOT_VALID: number;
    static NO_NUMERIC_VALUE: number;
    static validateArgumentName(paramarg0: string): number;
    constructor()
    constructor(arg0: MessagePattern$ApostropheMode)
    constructor(arg0: string)
    // private aposMode: MessagePattern$ApostropheMode;
    readonly frozen: boolean;
    // private hasArgNames: boolean;
    // private hasArgNumbers: boolean;
    // private msg: string;
    // private needsAutoQuoting: boolean;
    // private numericValues: number[];
    // private parts: MessagePattern$Part[];
    // private addArgDoublePart(arg0: number, arg1: number, arg2: number): void;
    // private addLimitPart(arg0: number, arg1: MessagePattern$Part$Type, arg2: number, arg3: number, arg4: number): void;
    // private addPart(arg0: MessagePattern$Part$Type, arg1: number, arg2: number, arg3: number): void;
    autoQuoteApostropheDeep(): string;
    clear(): void;
    clearPatternAndSetApostropheMode(arg0: MessagePattern$ApostropheMode): void;
    clone(): MessagePattern;
    protected clone(): Object;
    cloneAsThawed(): MessagePattern;
    countParts(): number;
    equals(arg0: Object | null): boolean;
    freeze(): MessagePattern;
    getApostropheMode(): MessagePattern$ApostropheMode;
    getLimitPartIndex(arg0: number): number;
    getNumericValue(arg0: MessagePattern$Part): number;
    getPart(arg0: number): MessagePattern$Part;
    getPartType(arg0: number): MessagePattern$Part$Type;
    getPatternIndex(arg0: number): number;
    getPatternString(): string;
    getPluralOffset(arg0: number): number;
    getSubstring(arg0: MessagePattern$Part): string;
    hasNamedArguments(): boolean;
    hasNumberedArguments(): boolean;
    hashCode(): number;
    // private inMessageFormatPattern(arg0: number): boolean;
    // private inTopLevelChoiceMessage(arg0: number, arg1: MessagePattern$ArgType): boolean;
    // private isChoice(arg0: number): boolean;
    isFrozen(): boolean;
    // private isOrdinal(arg0: number): boolean;
    // private isPlural(arg0: number): boolean;
    // private isSelect(arg0: number): boolean;
    jdkAposMode(): boolean;
    parse(arg0: string): MessagePattern;
    // private parseArg(arg0: number, arg1: number, arg2: number): number;
    // private parseArgNumber(arg0: number, arg1: number): number;
    // private parseChoiceStyle(arg0: number, arg1: number): number;
    parseChoiceStyle(arg0: string): MessagePattern;
    // private parseDouble(arg0: number, arg1: number, arg2: boolean): void;
    // private parseMessage(arg0: number, arg1: number, arg2: number, arg3: MessagePattern$ArgType): number;
    // private parsePluralOrSelectStyle(arg0: MessagePattern$ArgType, arg1: number, arg2: number): number;
    parsePluralStyle(arg0: string): MessagePattern;
    parseSelectStyle(arg0: string): MessagePattern;
    // private parseSimpleStyle(arg0: number): number;
    partSubstringMatches(arg0: MessagePattern$Part, arg1: string): boolean;
    // private postParse(): void;
    // private preParse(arg0: string): void;
    // private prefix(): string;
    // private prefix(arg0: number): string;
    // private skipDouble(arg0: number): number;
    // private skipIdentifier(arg0: number): number;
    // private skipWhiteSpace(arg0: number): number;
    toString(): string;
}