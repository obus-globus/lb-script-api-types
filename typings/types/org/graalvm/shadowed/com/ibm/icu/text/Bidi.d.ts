import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { UBiDiProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UBiDiProps.d.ts'
import type { Bidi$BracketData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Bidi$BracketData.d.ts'
import type { Bidi$ImpTabPair } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Bidi$ImpTabPair.d.ts'
import type { Bidi$InsertPoints } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Bidi$InsertPoints.d.ts'
import type { Bidi$Isolate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Bidi$Isolate.d.ts'
import type { Bidi$LevState } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Bidi$LevState.d.ts'
import type { BidiClassifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BidiClassifier.d.ts'
import type { BidiRun } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BidiRun.d.ts'
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
    static getBaseDirection(paramparagraph: CharSequence): number;
    static invertMap(paramsrcMap: number[]): number[];
    static reorderLogical(paramlevels: number[]): number[];
    static reorderVisual(paramlevels: number[]): number[];
    static reorderVisually(paramlevels: number[], paramlevelStart: number, paramobjects: Object[], paramobjectStart: number, paramcount: number): void;
    static requiresBidi(paramtext: string[], paramstart: number, paramlimit: number): boolean;
    static writeReverse(paramsrc: string, paramoptions: number): string;
    constructor()
    constructor(paragraph: AttributedCharacterIterator)
    constructor(text: string[], textStart: number, embeddings: number[], embStart: number, paragraphLength: number, flags: number)
    constructor(maxLength: number, maxRunCount: number)
    constructor(paragraph: string, flags: number)
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
    Bidi_Abs(x: number): number;
    Bidi_Min(x: number, y: number): number;
    GetParaLevelAt(pindex: number): number;
    // private addPoint(pos: number, flag: number): void;
    // private adjustWSLevels(): void;
    baseIsLeftToRight(): boolean;
    // private bracketAddOpening(bd: Bidi$BracketData, match: string, position: number): void;
    // private bracketInit(bd: Bidi$BracketData): void;
    // private bracketProcessB(bd: Bidi$BracketData, level: number): void;
    // private bracketProcessBoundary(bd: Bidi$BracketData, lastCcPos: number, contextLevel: number, embeddingLevel: number): void;
    // private bracketProcessChar(bd: Bidi$BracketData, position: number): void;
    // private bracketProcessClosing(bd: Bidi$BracketData, openIdx: number, position: number): number;
    // private bracketProcessLRI_RLI(bd: Bidi$BracketData, level: number): void;
    // private bracketProcessPDI(bd: Bidi$BracketData): void;
    // private checkExplicitLevels(): number;
    // private checkParaCount(): void;
    countParagraphs(): number;
    countRuns(): number;
    createLineBidi(lineStart: number, lineLimit: number): Bidi;
    // private directionFromFlags(): number;
    // private firstL_R_AL(): number;
    // private firstL_R_AL_EN_AN(): number;
    // private fixN0c(bd: Bidi$BracketData, openingIndex: number, newPropPosition: number, newProp: number): void;
    getBaseLevel(): number;
    getCustomClassifier(): BidiClassifier;
    getCustomizedClass(c: number): number;
    // private getDirProps(): void;
    // private getDirPropsMemory(mayAllocate: boolean, len: number): void;
    getDirPropsMemory(len: number): void;
    getDirection(): number;
    // private getInitialDirPropsMemory(len: number): void;
    // private getInitialLevelsMemory(len: number): void;
    // private getInitialRunsMemory(len: number): void;
    getLength(): number;
    getLevelAt(charIndex: number): number;
    getLevels(): number[];
    // private getLevelsMemory(mayAllocate: boolean, len: number): void;
    getLevelsMemory(len: number): void;
    getLogicalIndex(visualIndex: number): number;
    getLogicalMap(): number[];
    getLogicalRun(logicalPosition: number): BidiRun;
    getLogicalToVisualRunsMap(): void;
    // private getMemory(label: string, array: Object, arrayClass: Class<Object>, mayAllocate: boolean, sizeNeeded: number): Object;
    getParaLevel(): number;
    getParagraph(charIndex: number): BidiRun;
    getParagraphByIndex(paraIndex: number): BidiRun;
    getParagraphIndex(charIndex: number): number;
    getProcessedLength(): number;
    getReorderingMode(): number;
    getReorderingOptions(): number;
    getResultLength(): number;
    getRunCount(): number;
    getRunLevel(run: number): number;
    getRunLimit(run: number): number;
    getRunStart(run: number): number;
    // private getRunsMemory(mayAllocate: boolean, len: number): void;
    getRunsMemory(len: number): void;
    getText(): string[];
    getTextAsString(): string;
    getVisualIndex(logicalIndex: number): number;
    getVisualMap(): number[];
    getVisualRun(runIndex: number): BidiRun;
    isInverse(): boolean;
    isLeftToRight(): boolean;
    isMixed(): boolean;
    isOrderParagraphsLTR(): boolean;
    isRightToLeft(): boolean;
    // private lastL_R_AL(): number;
    orderParagraphsLTR(ordarParaLTR: boolean): void;
    // private processPropertySeq(levState: Bidi$LevState, _prop: number, start: number, limit: number): void;
    // private resolveExplicitLevels(): number;
    // private resolveImplicitLevels(start: number, limit: number, sor: number, eor: number): void;
    setContext(prologue: string, epilogue: string): void;
    setCustomClassifier(classifier: BidiClassifier): void;
    setInverse(isInverse: boolean): void;
    // private setLevelsOutsideIsolates(start: number, limit: number, level: number): void;
    setLine(start: number, limit: number): Bidi;
    setPara(paragraph: AttributedCharacterIterator): void;
    setPara(chars: string[], paraLevel: number, embeddingLevels: number[]): void;
    setPara(text: string, paraLevel: number, embeddingLevels: number[]): void;
    setParaRunsOnly(parmText: string[], parmParaLevel: number): void;
    // private setParaSuccess(): void;
    setReorderingMode(reorderingMode: number): void;
    setReorderingOptions(options: number): void;
    testDirPropFlagAt(flag: number, index: number): boolean;
    verifyRange(index: number, start: number, limit: number): void;
    verifyValidPara(): void;
    verifyValidParaOrLine(): void;
    writeReordered(options: number): string;
}