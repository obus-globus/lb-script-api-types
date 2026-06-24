import type { Member } from '../../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Caller<M extends Member> extends Object{
    call(args: (Object | null)[]): Object | null;
    checkArguments(args: (Object | null)[]): void;
    checkArguments(argsCount: number): void;
}