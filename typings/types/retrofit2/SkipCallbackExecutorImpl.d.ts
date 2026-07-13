import type { Class } from '../java/lang/Class.d.ts'
import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { SkipCallbackExecutor } from '../retrofit2/SkipCallbackExecutor.d.ts'
export class SkipCallbackExecutorImpl extends Object implements SkipCallbackExecutor {
    constructor()
    annotationType(): Class<Annotation>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}