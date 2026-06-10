import type { Optional } from '../../../../../../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TrClass } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrEnvironment } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrEnvironment.d.ts'
import type { TrField } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrField.d.ts'
import type { TrLogger } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger.d.ts'
import type { TrMember } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
import type { TrMethod } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMethod.d.ts'
export class ResolveUtility extends Object {
    static FLAG_FIRST: number;
    static FLAG_NON_SYN: number;
    static FLAG_RECURSIVE: number;
    static FLAG_UNIQUE: number;
    constructor(arg0: TrEnvironment)
    // private environment: TrEnvironment;
    // private logger: TrLogger;
    resolveClass(arg0: string): Optional<TrClass>;
    resolveField(arg0: string, arg1: string, arg2: string, arg3: number): Optional<TrField>;
    resolveField(arg0: TrClass, arg1: string, arg2: string, arg3: number): Optional<TrField>;
    resolveMember(arg0: string, arg1: string, arg2: string, arg3: number): Optional<TrMember>;
    resolveMember(arg0: TrClass, arg1: string, arg2: string, arg3: number): Optional<TrMember>;
    // private resolveMember0<T extends TrMember>(arg0: TrClass, arg1: string, arg2: string, arg3: number, arg4: () => T[], arg5: () => T[]): Optional<T>;
    resolveMethod(arg0: string, arg1: string, arg2: string, arg3: number): Optional<TrMethod>;
    resolveMethod(arg0: TrClass, arg1: string, arg2: string, arg3: number): Optional<TrMethod>;
}