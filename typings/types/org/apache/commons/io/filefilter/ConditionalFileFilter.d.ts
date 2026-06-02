import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOFileFilter } from '../../../../../org/apache/commons/io/filefilter/IOFileFilter.d.ts'
export interface ConditionalFileFilter extends Object{
    addFileFilter(arg0: IOFileFilter): void;
    getFileFilters(): IOFileFilter[];
    removeFileFilter(arg0: IOFileFilter): boolean;
    setFileFilters(arg0: IOFileFilter[]): void;
}