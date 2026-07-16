import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TruffleCompilerOptionDescriptor$Type extends Enum<TruffleCompilerOptionDescriptor$Type> {
    static DEBUG: TruffleCompilerOptionDescriptor$Type;
    static EXPERT: TruffleCompilerOptionDescriptor$Type;
    static USER: TruffleCompilerOptionDescriptor$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleCompilerOptionDescriptor$Type;
    static values(): TruffleCompilerOptionDescriptor$Type[];
    private constructor()
    name(): "USER" | "EXPERT" | "DEBUG";
}