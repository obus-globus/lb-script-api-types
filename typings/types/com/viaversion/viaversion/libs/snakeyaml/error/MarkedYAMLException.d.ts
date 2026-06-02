import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { YAMLException } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/YAMLException.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class MarkedYAMLException extends YAMLException {
    constructor(arg0: string, arg1: Mark, arg2: string, arg3: Mark)
    constructor(arg0: string, arg1: Mark, arg2: string, arg3: Mark, arg4: string)
    constructor(arg0: string, arg1: Mark, arg2: string, arg3: Mark, arg4: string, arg5: Throwable)
    constructor(arg0: string, arg1: Mark, arg2: string, arg3: Mark, arg4: Throwable)
    readonly context: string;
    readonly contextMark: Mark;
    readonly message: string | null;
    // private note: string;
    readonly problem: string;
    readonly problemMark: Mark;
    getContext(): string;
    getContextMark(): Mark;
    getProblem(): string;
    getProblemMark(): Mark;
    toString(): string;
}