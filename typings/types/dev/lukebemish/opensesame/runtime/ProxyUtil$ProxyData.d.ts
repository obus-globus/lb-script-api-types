import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProxyUtil$ProxyData extends Record {
    // private isProxy: boolean;
    // private targetClass: Class<Object>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isProxy(): boolean;
    targetClass(): Class<Object>;
    toString(): string;
}