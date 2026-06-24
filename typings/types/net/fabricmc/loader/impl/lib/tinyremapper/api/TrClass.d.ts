import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TrEnvironment } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrEnvironment.d.ts'
import type { TrField } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrField.d.ts'
import type { TrMethod } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMethod.d.ts'
export interface TrClass extends Object {
    getAccess(): number;
    getEnvironment(): TrEnvironment;
    getFields(arg0: string, arg1: string, arg2: boolean, arg3: (param0: TrField) => boolean, arg4: TrField[]): TrField[];
    getMethod(arg0: string, arg1: string): TrMethod;
    getMethods(): TrMethod[];
    getMethods(arg0: string, arg1: string, arg2: boolean, arg3: (param0: TrMethod) => boolean, arg4: TrMethod[]): TrMethod[];
    getName(): string;
    isAssignableFrom(arg0: TrClass): boolean;
    isInput(): boolean;
    isInterface(): boolean;
    isRecord(): boolean;
    resolveFields(arg0: string, arg1: string, arg2: boolean, arg3: (param0: TrField) => boolean, arg4: TrField[]): TrField[];
    resolveMethods(arg0: string, arg1: string, arg2: boolean, arg3: (param0: TrMethod) => boolean, arg4: TrMethod[]): TrMethod[];
}