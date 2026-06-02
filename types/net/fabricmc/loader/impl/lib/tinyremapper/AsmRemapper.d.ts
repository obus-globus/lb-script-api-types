import type { ClassInstance } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/ClassInstance.d.ts'
import type { TinyRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper.d.ts'
import type { TinyRemapper$MrjState } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$MrjState.d.ts'
import type { TrRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrRemapper.d.ts'
import type { ClassVisitor } from '../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
export class AsmRemapper extends TrRemapper {
    constructor(arg0: TinyRemapper$MrjState)
    // private context: TinyRemapper$MrjState;
    // private tr: TinyRemapper;
    finish(arg0: string, arg1: ClassVisitor): void;
    getClass(arg0: string): ClassInstance;
    map(arg0: string): string;
    mapAnnotationAttributeName(arg0: string, arg1: string): string;
    mapAnnotationAttributeName(arg0: string, arg1: string, arg2: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    mapFieldName(arg0: ClassInstance, arg1: string, arg2: string): string;
    mapMethodArg(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
    mapMethodName(arg0: ClassInstance, arg1: string, arg2: string): string;
    mapMethodNamePrefixDesc(arg0: string, arg1: string, arg2: string): string;
    mapMethodVar(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: number, arg6: string): string;
    mapRecordComponentName(arg0: string, arg1: string, arg2: string): string;
}