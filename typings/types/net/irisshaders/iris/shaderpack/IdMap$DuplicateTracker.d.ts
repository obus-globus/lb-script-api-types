import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockEntry } from '../../../../net/irisshaders/iris/shaderpack/materialmap/BlockEntry.d.ts'
export class IdMap$DuplicateTracker extends Object {
    static getUniqueBlockIdentifier(paramarg0: BlockEntry): string;
    constructor(arg0: string, arg1: string)
    // private debugEnabled: boolean;
    // private duplicateCounts: JavaMap<string, number>;
    // private fileName: string;
    // private identifierToKeyMap: JavaMap<string, string>;
    // private itemType: string;
    // private reportedDuplicates: string[];
    checkAndRecord(arg0: string, arg1: string, arg2: string): void;
    reportSummary(): void;
}