import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IMappingProvider$Member } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/IMappingProvider$Member.d.ts'
export interface IMappingProvider$MappingAcceptor extends Object{
    acceptClass(arg0: string, arg1: string): void;
    acceptField(arg0: IMappingProvider$Member, arg1: string): void;
    acceptMethod(arg0: IMappingProvider$Member, arg1: string): void;
    acceptMethodArg(arg0: IMappingProvider$Member, arg1: number, arg2: string): void;
    acceptMethodVar(arg0: IMappingProvider$Member, arg1: number, arg2: number, arg3: number, arg4: string): void;
}