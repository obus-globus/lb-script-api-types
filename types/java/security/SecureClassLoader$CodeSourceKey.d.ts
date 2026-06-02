import type { Record } from '../../java/lang/Record.d.ts'
import type { CodeSource } from '../../java/security/CodeSource.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SecureClassLoader$CodeSourceKey extends Record {
    private constructor(cs: CodeSource)
    // private cs: CodeSource;
    cs(): CodeSource;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}