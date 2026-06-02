import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MappingFlag } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingFlag.d.ts'
export interface FlatMappingVisitor extends Object{
    getFlags(): MappingFlag[];
    reset(): void;
    visitClass(arg0: string, arg1: string[]): boolean;
    visitClassComment(arg0: string, arg1: string[], arg2: string): void;
    visitContent(): boolean;
    visitEnd(): boolean;
    visitField(arg0: string, arg1: string, arg2: string, arg3: string[], arg4: string[], arg5: string[]): boolean;
    visitFieldComment(arg0: string, arg1: string, arg2: string, arg3: string[], arg4: string[], arg5: string[], arg6: string): void;
    visitHeader(): boolean;
    visitMetadata(arg0: string, arg1: string): void;
    visitMethod(arg0: string, arg1: string, arg2: string, arg3: string[], arg4: string[], arg5: string[]): boolean;
    visitMethodArg(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: string, arg6: string[], arg7: string[], arg8: string[], arg9: string[]): boolean;
    visitMethodArgComment(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: string, arg6: string[], arg7: string[], arg8: string[], arg9: string[], arg10: string): void;
    visitMethodComment(arg0: string, arg1: string, arg2: string, arg3: string[], arg4: string[], arg5: string[], arg6: string): void;
    visitMethodVar(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: string, arg8: string[], arg9: string[], arg10: string[], arg11: string[]): boolean;
    visitMethodVarComment(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: string, arg8: string[], arg9: string[], arg10: string[], arg11: string[], arg12: string): void;
    visitNamespaces(arg0: string, arg1: string[]): void;
}