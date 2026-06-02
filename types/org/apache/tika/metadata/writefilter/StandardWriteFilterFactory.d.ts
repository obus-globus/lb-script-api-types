import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataWriteFilter } from '../../../../../org/apache/tika/metadata/writefilter/MetadataWriteFilter.d.ts'
import type { MetadataWriteFilterFactory } from '../../../../../org/apache/tika/metadata/writefilter/MetadataWriteFilterFactory.d.ts'
export class StandardWriteFilterFactory extends Object implements MetadataWriteFilterFactory {
    static DEFAULT_MAX_FIELD_SIZE: number;
    static DEFAULT_MAX_KEY_SIZE: number;
    static DEFAULT_MAX_VALUES_PER_FIELD: number;
    static DEFAULT_TOTAL_ESTIMATED_BYTES: number;
    constructor()
    readonly excludeFields: string[];
    readonly includeEmpty: boolean;
    readonly includeFields: string[];
    readonly maxFieldSize: number;
    readonly maxKeySize: number;
    readonly maxTotalEstimatedBytes: number;
    readonly maxValuesPerField: number;
    getIncludeFields(): string[];
    getMaxFieldSize(): number;
    getMaxKeySize(): number;
    getMaxTotalEstimatedBytes(): number;
    getMaxValuesPerField(): number;
    isIncludeEmpty(): boolean;
    newInstance(): MetadataWriteFilter;
    setExcludeFields(arg0: string[]): void;
    setIncludeEmpty(arg0: boolean): void;
    setIncludeFields(arg0: string[]): void;
    setMaxFieldSize(arg0: number): void;
    setMaxKeySize(arg0: number): void;
    setMaxTotalEstimatedBytes(arg0: number): void;
    setMaxValuesPerField(arg0: number): void;
    toString(): string;
}