import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LogCategory extends Object {
    static DISCOVERY: LogCategory;
    static ENTRYPOINT: LogCategory;
    static GAME_PATCH: LogCategory;
    static GAME_PROVIDER: LogCategory;
    static GAME_REMAP: LogCategory;
    static GENERAL: LogCategory;
    static KNOT: LogCategory;
    static LIB_CLASSIFICATION: LogCategory;
    static LOG: LogCategory;
    static MAPPINGS: LogCategory;
    static METADATA: LogCategory;
    static MIXIN: LogCategory;
    static MOD_REMAP: LogCategory;
    static RESOLUTION: LogCategory;
    static SEPARATOR: string;
    static TEST: LogCategory;
    static create(...paramarg0: (Object | null)[]): LogCategory;
    static createCustom(paramarg0: string, ...paramarg1: (Object | null)[]): LogCategory;
    private constructor(arg0: string, arg1: string[])
    context: string;
    data: Object;
    name: string;
    toString(): string;
}