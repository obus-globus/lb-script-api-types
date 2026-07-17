import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingFlag } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingFlag.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { ForwardingMappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/adapter/ForwardingMappingVisitor.d.ts'
export class MappingSourceNsSwitch extends ForwardingMappingVisitor {
    constructor(arg0: MappingVisitor, arg1: string, arg2: boolean)
    // private argIdx: number;
    // private classMap: JavaMap<string, string>;
    // private classMapReady: boolean;
    // private dropMissingNewSrcName: boolean;
    // private dstDescs: string[];
    // private dstNames: string[];
    // private endOpIdx: number;
    // private lvIndex: number;
    // private newSourceNs: number;
    // private newSourceNsName: string;
    // private oldSourceNsName: string;
    // private passThrough: boolean;
    // private relayHeaderOrMetadata: boolean;
    // private srcDesc: string;
    // private srcName: string;
    // private startOpIdx: number;
    getFlags(): MappingFlag[];
    reset(): void;
    visitClass(arg0: string): boolean;
    visitContent(): boolean;
    visitDstDesc(arg0: MappedElementKind, arg1: number, arg2: string): void;
    visitDstName(arg0: MappedElementKind, arg1: number, arg2: string): void;
    visitElementContent(arg0: MappedElementKind): boolean;
    visitEnd(): boolean;
    visitField(arg0: string, arg1: string): boolean;
    visitHeader(): boolean;
    visitMetadata(arg0: string, arg1: string): void;
    visitMethod(arg0: string, arg1: string): boolean;
    visitMethodArg(arg0: number, arg1: number, arg2: string): boolean;
    visitMethodVar(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
    visitNamespaces(arg0: string, arg1: string[]): void;
}