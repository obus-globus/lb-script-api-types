import type { DFAGenerator } from '../../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAGenerator.d.ts'
import type { DFACaptureGroupPartialTransition$IndexOperation } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition$IndexOperation.d.ts'
import type { DFACaptureGroupPartialTransition$LastGroupUpdate } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition$LastGroupUpdate.d.ts'
import type { DFACaptureGroupTrackingData } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupTrackingData.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupPartialTransition extends Object implements JsonConvertible {
    static EMPTY: number[];
    static EMPTY_INDEX_OPS: (Object | null)[];
    static EMPTY_LAST_GROUP_UPDATES: (Object | null)[];
    static FINAL_STATE_RESULT_INDEX: number;
    static create(paramdfaGen: DFAGenerator, paramreorderSwaps: number[], paramarrayCopies: number[], paramindexUpdates: (Object | null)[], paramindexClears: (Object | null)[], paramlastGroupUpdates: (Object | null)[], parampreReorderFinalStateResultIndex: number): DFACaptureGroupPartialTransition;
    static getEmptyInstance(): DFACaptureGroupPartialTransition;
    static intersect(paramtransitions: (Object | null)[]): DFACaptureGroupPartialTransition;
    private constructor(id: number, reorderSwaps: number[], arrayCopies: number[], indexUpdates: DFACaptureGroupPartialTransition$IndexOperation[], indexClears: DFACaptureGroupPartialTransition$IndexOperation[], lastGroupUpdates: DFACaptureGroupPartialTransition$LastGroupUpdate[], preReorderFinalStateResultIndex: number)
    readonly arrayCopies: number[];
    readonly id: number;
    readonly indexClears: DFACaptureGroupPartialTransition$IndexOperation[];
    readonly indexUpdates: DFACaptureGroupPartialTransition$IndexOperation[];
    readonly lastGroupUpdates: DFACaptureGroupPartialTransition$LastGroupUpdate[];
    // private preReorderFinalStateResultIndex: number;
    readonly reorderSwaps: number[];
    apply(executor: TRegexDFAExecutorNode, d: DFACaptureGroupTrackingData, currentIndex: number): void;
    apply(executor: TRegexDFAExecutorNode, d: DFACaptureGroupTrackingData, currentIndex: number, preFinal: boolean, export_: boolean): void;
    // private applyArrayCopy(results: number[], currentResultOrder: number[], length: number): void;
    applyFinalStateTransition(executor: TRegexDFAExecutorNode, d: DFACaptureGroupTrackingData, currentIndex: number): void;
    // private applyLastGroupUpdate(results: number[], currentResultOrder: number[], length: number): void;
    // private applyPreFinalStateTransition(executor: TRegexDFAExecutorNode, d: DFACaptureGroupTrackingData, currentIndex: number, export_: boolean): void;
    // private applyRegular(executor: TRegexDFAExecutorNode, d: DFACaptureGroupTrackingData, currentIndex: number): void;
    // private applyReorder(currentResultOrder: number[]): void;
    doesReorderResults(): boolean;
    equals(obj: Object | null): boolean;
    getArrayCopies(): number[];
    getCost(): number;
    getId(): number;
    getIndexClears(): DFACaptureGroupPartialTransition$IndexOperation[];
    getIndexUpdates(): DFACaptureGroupPartialTransition$IndexOperation[];
    getLastGroupUpdates(): DFACaptureGroupPartialTransition$LastGroupUpdate[];
    getReorderSwaps(): number[];
    hashCode(): number;
    isEmpty(): boolean;
    subtract(other: DFACaptureGroupPartialTransition): DFACaptureGroupPartialTransition;
    toJson(): JsonValue;
    toString(): string;
}