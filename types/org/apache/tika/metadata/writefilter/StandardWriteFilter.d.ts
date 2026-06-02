import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataWriteFilter } from '../../../../../org/apache/tika/metadata/writefilter/MetadataWriteFilter.d.ts'
import type { StandardWriteFilter$StringSizePair } from '../../../../../org/apache/tika/metadata/writefilter/StandardWriteFilter$StringSizePair.d.ts'
export class StandardWriteFilter extends Object implements Serializable, MetadataWriteFilter {
    static ALWAYS_ADD_FIELDS: string[];
    static ALWAYS_SET_FIELDS: string[];
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string[], arg5: string[], arg6: boolean)
    // private estimatedSize: number;
    // private excludeFields: string[];
    // private fieldSizes: { [key: string]: number };
    // private includeEmpty: boolean;
    // private includeFields: string[];
    // private maxFieldSize: number;
    // private maxKeySize: number;
    // private maxTotalEstimatedSize: number;
    // private maxValuesPerField: number;
    // private minimumMaxFieldSizeInAlwaysFields: number;
    add(arg0: string, arg1: string, arg2: { [key: string]: string[] }): void;
    // private addAlwaysInclude(arg0: string, arg1: string, arg2: { [key: string]: string[] }): void;
    // private appendValue(arg0: string[], arg1: string): string[];
    filterExisting(arg0: { [key: string]: string[] }): void;
    // private filterKey(arg0: string, arg1: string, arg2: { [key: string]: string[] }): StandardWriteFilter$StringSizePair;
    // private include(arg0: string, arg1: string): boolean;
    // private includeField(arg0: string): boolean;
    // private includeValue(arg0: string): boolean;
    // private maxAllowedToAdd(arg0: StandardWriteFilter$StringSizePair): number;
    // private maxAllowedToSet(arg0: StandardWriteFilter$StringSizePair): number;
    set(arg0: string, arg1: string, arg2: { [key: string]: string[] }): void;
    // private setAlwaysInclude(arg0: string, arg1: string, arg2: { [key: string]: string[] }): void;
    // private setFilterKey(arg0: StandardWriteFilter$StringSizePair, arg1: string, arg2: { [key: string]: string[] }): void;
    // private setTruncated(arg0: { [key: string]: string[] }): void;
    // private truncate(arg0: string, arg1: number, arg2: { [key: string]: string[] }): string;
}