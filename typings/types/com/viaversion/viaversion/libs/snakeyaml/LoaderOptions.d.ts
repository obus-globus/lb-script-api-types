import type { TagInspector } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/inspector/TagInspector.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LoaderOptions extends Object {
    constructor()
    readonly allowDuplicateKeys: boolean;
    readonly allowRecursiveKeys: boolean;
    readonly codePointLimit: number;
    readonly enumCaseSensitive: boolean;
    readonly maxAliasesForCollections: number;
    readonly mergeOnCompose: boolean;
    readonly nestingDepthLimit: number;
    readonly processComments: boolean;
    readonly tagInspector: TagInspector;
    readonly warnOnDuplicateKeys: boolean;
    readonly wrappedToRootException: boolean;
    getAllowRecursiveKeys(): boolean;
    getCodePointLimit(): number;
    getMaxAliasesForCollections(): number;
    getNestingDepthLimit(): number;
    getTagInspector(): TagInspector;
    isAllowDuplicateKeys(): boolean;
    isEnumCaseSensitive(): boolean;
    isMergeOnCompose(): boolean;
    isProcessComments(): boolean;
    isWarnOnDuplicateKeys(): boolean;
    isWrappedToRootException(): boolean;
    setAllowDuplicateKeys(arg0: boolean): void;
    setAllowRecursiveKeys(arg0: boolean): void;
    setCodePointLimit(arg0: number): void;
    setEnumCaseSensitive(arg0: boolean): void;
    setMaxAliasesForCollections(arg0: number): void;
    setMergeOnCompose(arg0: boolean): void;
    setNestingDepthLimit(arg0: number): void;
    setProcessComments(arg0: boolean): LoaderOptions;
    setTagInspector(arg0: TagInspector): void;
    setWarnOnDuplicateKeys(arg0: boolean): void;
    setWrappedToRootException(arg0: boolean): void;
}