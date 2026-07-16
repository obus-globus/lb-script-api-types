import type { UBiDiProps } from '../../../../com/ibm/icu/impl/UBiDiProps.d.ts'
import type { Bidi$BracketData } from '../../../../com/ibm/icu/text/Bidi$BracketData.d.ts'
import type { Bidi$ImpTabPair } from '../../../../com/ibm/icu/text/Bidi$ImpTabPair.d.ts'
import type { Bidi$InsertPoints } from '../../../../com/ibm/icu/text/Bidi$InsertPoints.d.ts'
import type { Bidi$Isolate } from '../../../../com/ibm/icu/text/Bidi$Isolate.d.ts'
import type { Bidi$LevState } from '../../../../com/ibm/icu/text/Bidi$LevState.d.ts'
import type { BidiClassifier } from '../../../../com/ibm/icu/text/BidiClassifier.d.ts'
import type { BidiRun } from '../../../../com/ibm/icu/text/BidiRun.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Bidi extends Object {
    static CLASS_DEFAULT: number;
    static DIRECTION_DEFAULT_LEFT_TO_RIGHT: number;
    static DIRECTION_DEFAULT_RIGHT_TO_LEFT: number;
    static DIRECTION_LEFT_TO_RIGHT: number;
    static DIRECTION_RIGHT_TO_LEFT: number;
    static DO_MIRRORING: number;
    static INSERT_LRM_FOR_NUMERIC: number;
    static KEEP_BASE_COMBINING: number;
    static LEVEL_DEFAULT_LTR: number;
    static LEVEL_DEFAULT_RTL: number;
    static LEVEL_OVERRIDE: number;
    static LTR: number;
    static MAP_NOWHERE: number;
    static MAX_EXPLICIT_LEVEL: number;
    static MIXED: number;
    static NEUTRAL: number;
    static OPTION_DEFAULT: number;
    static OPTION_INSERT_MARKS: number;
    static OPTION_REMOVE_CONTROLS: number;
    static OPTION_STREAMING: number;
    static OUTPUT_REVERSE: number;
    static REMOVE_BIDI_CONTROLS: number;
    static REORDER_DEFAULT: number;
    static REORDER_GROUP_NUMBERS_WITH_R: number;
    static REORDER_INVERSE_FOR_NUMBERS_SPECIAL: number;
    static REORDER_INVERSE_LIKE_DIRECT: number;
    static REORDER_INVERSE_NUMBERS_AS_L: number;
    static REORDER_NUMBERS_SPECIAL: number;
    static REORDER_RUNS_ONLY: number;
    static RTL: number;
    static getBaseDirection(paramarg0: CharSequence): number;
    static invertMap(paramarg0: number[]): number[];
    static reorderLogical(paramarg0: number[]): number[];
    static reorderVisual(paramarg0: number[]): number[];
    static reorderVisually(paramarg0: number[], paramarg1: number, paramarg2: Object[], paramarg3: number, paramarg4: number): void;
    static requiresBidi(paramarg0: string[], paramarg1: number, paramarg2: number): boolean;
    static writeReverse(paramarg0: string, paramarg1: number): string;
    constructor()
    constructor(arg0: AttributedCharacterIterator)
    constructor(arg0: string[], arg1: number, arg2: number[], arg3: number, arg4: number, arg5: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: string, arg1: number)
    // private bdp: UBiDiProps;
    // private controlCount: number;
    customClassifier: BidiClassifier;
    // private defaultParaLevel: number;
    // private dirProps: number[];
    // private dirPropsMemory: number[];
    direction: number;
    // private epilogue: string;
    // private flags: number;
    // private impTabPair: Bidi$ImpTabPair;
    // private insertPoints: Bidi$InsertPoints;
    // private isGoodLogicalToVisualRunsMap: boolean;
    // private isInverse: boolean;
    // private isolateCount: number;
    // private isolates: Bidi$Isolate[];
    // private lastArabicPos: number;
    length: number;
    levels: number[];
    // private levelsMemory: number[];
    // private logicalToVisualRunsMap: number[];
    // private mayAllocateRuns: boolean;
    // private mayAllocateText: boolean;
    // private originalLength: number;
    // private paraBidi: Bidi;
    // private paraCount: number;
    paraLevel: number;
    // private paras_level: number[];
    // private paras_limit: number[];
    // private prologue: string;
    reorderingMode: number;
    reorderingOptions: number;
    resultLength: number;
    runCount: number;
    // private runs: BidiRun[];
    // private runsMemory: BidiRun[];
    // private simpleRuns: BidiRun[];
    text: string[];
    // private trailingWSStart: number;
    Bidi_Abs(arg0: number): number;
    Bidi_Min(arg0: number, arg1: number): number;
    GetParaLevelAt(arg0: number): number;
    // private addPoint(arg0: number, arg1: number): void;
    // private adjustWSLevels(): void;
    baseIsLeftToRight(): boolean;
    // private bracketAddOpening(arg0: Bidi$BracketData, arg1: string, arg2: number): void;
    // private bracketInit(arg0: Bidi$BracketData): void;
    // private bracketProcessB(arg0: Bidi$BracketData, arg1: number): void;
    // private bracketProcessBoundary(arg0: Bidi$BracketData, arg1: number, arg2: number, arg3: number): void;
    // private bracketProcessChar(arg0: Bidi$BracketData, arg1: number): void;
    // private bracketProcessClosing(arg0: Bidi$BracketData, arg1: number, arg2: number): number;
    // private bracketProcessLRI_RLI(arg0: Bidi$BracketData, arg1: number): void;
    // private bracketProcessPDI(arg0: Bidi$BracketData): void;
    // private checkExplicitLevels(): number;
    // private checkParaCount(): void;
    countParagraphs(): number;
    countRuns(): number;
    createLineBidi(arg0: number, arg1: number): Bidi;
    // private directionFromFlags(): number;
    // private firstL_R_AL(): number;
    // private firstL_R_AL_EN_AN(): number;
    // private fixN0c(arg0: Bidi$BracketData, arg1: number, arg2: number, arg3: number): void;
    getBaseLevel(): number;
    getCustomClassifier(): BidiClassifier;
    getCustomizedClass(arg0: number): number;
    // private getDirProps(): void;
    // private getDirPropsMemory(arg0: boolean, arg1: number): void;
    getDirPropsMemory(arg0: number): void;
    getDirection(): number;
    // private getInitialDirPropsMemory(arg0: number): void;
    // private getInitialLevelsMemory(arg0: number): void;
    // private getInitialRunsMemory(arg0: number): void;
    getLength(): number;
    getLevelAt(arg0: number): number;
    getLevels(): number[];
    // private getLevelsMemory(arg0: boolean, arg1: number): void;
    getLevelsMemory(arg0: number): void;
    getLogicalIndex(arg0: number): number;
    getLogicalMap(): number[];
    getLogicalRun(arg0: number): BidiRun;
    getLogicalToVisualRunsMap(): void;
    // private getMemory(arg0: string, arg1: Object, arg2: Class<Object>, arg3: boolean, arg4: number): Object;
    getParaLevel(): number;
    getParagraph(arg0: number): BidiRun;
    getParagraphByIndex(arg0: number): BidiRun;
    getParagraphIndex(arg0: number): number;
    getProcessedLength(): number;
    getReorderingMode(): number;
    getReorderingOptions(): number;
    getResultLength(): number;
    getRunCount(): number;
    getRunLevel(arg0: number): number;
    getRunLimit(arg0: number): number;
    getRunStart(arg0: number): number;
    // private getRunsMemory(arg0: boolean, arg1: number): void;
    getRunsMemory(arg0: number): void;
    getText(): string[];
    getTextAsString(): string;
    getVisualIndex(arg0: number): number;
    getVisualMap(): number[];
    getVisualRun(arg0: number): BidiRun;
    isInverse(): boolean;
    isLeftToRight(): boolean;
    isMixed(): boolean;
    isOrderParagraphsLTR(): boolean;
    isRightToLeft(): boolean;
    // private lastL_R_AL(): number;
    orderParagraphsLTR(arg0: boolean): void;
    // private processPropertySeq(arg0: Bidi$LevState, arg1: number, arg2: number, arg3: number): void;
    // private resolveExplicitLevels(): number;
    // private resolveImplicitLevels(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setContext(arg0: string, arg1: string): void;
    setCustomClassifier(arg0: BidiClassifier): void;
    setInverse(arg0: boolean): void;
    // private setLevelsOutsideIsolates(arg0: number, arg1: number, arg2: number): void;
    setLine(arg0: number, arg1: number): Bidi;
    setPara(arg0: AttributedCharacterIterator): void;
    setPara(arg0: string[], arg1: number, arg2: number[]): void;
    setPara(arg0: string, arg1: number, arg2: number[]): void;
    setParaRunsOnly(arg0: string[], arg1: number): void;
    // private setParaSuccess(): void;
    setReorderingMode(arg0: number): void;
    setReorderingOptions(arg0: number): void;
    testDirPropFlagAt(arg0: number, arg1: number): boolean;
    verifyRange(arg0: number, arg1: number, arg2: number): void;
    verifyValidPara(): void;
    verifyValidParaOrLine(): void;
    writeReordered(arg0: number): string;
}