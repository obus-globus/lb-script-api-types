import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NearestNodesCollector$Position extends Object {
    constructor(line: number, column: number, offset: number)
    // private column: number;
    // private line: number;
    // private offset: number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    isAvailable(): boolean;
    isGreaterThan(other: NearestNodesCollector$Position): boolean;
    isGreaterThanOrEqual(other: NearestNodesCollector$Position): boolean;
    isIn(section: SourceSection): boolean;
    isLessThan(other: NearestNodesCollector$Position): boolean;
    isLessThanOrEqual(other: NearestNodesCollector$Position): boolean;
    toString(): string;
}