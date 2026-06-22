import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MappedElementKind } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingFlag } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingFlag.d.ts'
import type { MappingVisitor } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
export interface MappingWriter extends Closeable, Object, MappingVisitor{
    close(): void;
    getFlags(): MappingFlag[];
    reset(): void;
    visitClass(arg0: string): boolean;
    visitComment(arg0: MappedElementKind, arg1: string): void;
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
}