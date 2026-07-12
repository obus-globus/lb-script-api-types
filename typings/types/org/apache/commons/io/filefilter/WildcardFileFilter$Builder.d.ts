import type { IOCase } from '../../../../../org/apache/commons/io/IOCase.d.ts'
import type { AbstractSupplier } from '../../../../../org/apache/commons/io/build/AbstractSupplier.d.ts'
import type { WildcardFileFilter } from '../../../../../org/apache/commons/io/filefilter/WildcardFileFilter.d.ts'
export class WildcardFileFilter$Builder extends AbstractSupplier<WildcardFileFilter, WildcardFileFilter$Builder> {
    constructor()
    // private ioCase: IOCase;
    // private wildcards: string[];
    get(): WildcardFileFilter;
    setIoCase(arg0: IOCase): WildcardFileFilter$Builder;
    setWildcards(...arg0: string[]): WildcardFileFilter$Builder;
    setWildcards(arg0: string[]): WildcardFileFilter$Builder;
}